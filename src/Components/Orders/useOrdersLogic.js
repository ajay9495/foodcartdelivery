import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import useOrdersApi from './useOrderApi'
import useLocalStorage from "../../SharedModules/LocalStorage/useLocalStorage";
import { useSelector,useDispatch } from "react-redux";
import {UserStore} from "../../Redux/UserSlice";
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";
import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig";

export default function useOrdersLogic(){

    let INITIAL_STATE = {
        data:[],
        error:"initial error"
    }; 

    const [state,setState] = useState(INITIAL_STATE);
    const navigateTo = useNavigate();
    const {api} = useOrdersApi();
    const {setLocalUserData,getLocalUserData} = useLocalStorage();
    const dispatch = useDispatch();
    const {sharedLibrary} = useSharedLibrary();
    const {config} = useSharedConfig();

    const USER_DATA = getLocalUserData();
    const storeId = USER_DATA.store_id;


    function goToLocation(){
        console.log("location");
    }

    function acceptDelevery(orderId){
        
        api.sendAcceptDeliveryRequest(orderId)
        .then((data)=>{     processAcceptDelivery(data)   })
        .catch((err)=>{     api.processApiError(err)    });

    }

    function completeDelivery(orderId){
        
        api.sendCompleteDeliveryRequest(orderId)
        .then((data)=>{     processCompleteDelivery(data)   })
        .catch((err)=>{     api.processApiError(err)    });

    }

    function processOrdersToBeCompleted(data){

        if(data.status == "success"){

            setState((prevState)=>{
                return {...prevState, data: data.payload}
            });
        }
        else{
            sharedLibrary.openDialogue("Could not get data from the server.");
        }
    }

    function processCompleteDelivery(data){

        if(data.status == "success"){
            api.getOrdersToBeCompleted(storeId)
            .then((data)=>{     processOrdersToBeCompleted(data)    })
            .catch((err)=>{     api.processApiError(err)        });
        }
        else{
            sharedLibrary.openDialogue("Could not change order status in the server.");
        }
    }

    function processAcceptDelivery(data){

        if(data.status == "success"){
            api.getOrdersToBeCompleted(storeId)
            .then((data)=>{     processOrdersToBeCompleted(data)    })
            .catch((err)=>{     api.processApiError(err)        });
        }
        else{
            sharedLibrary.openDialogue("Could not change order status in the server.");
        }
    }


    let l_currentLocalUserData = {};
    let userData = {};
    function logout(){

        l_currentLocalUserData = getLocalUserData();
        userData = {
            ...l_currentLocalUserData,
            status:'loggedOut'
        }; 


        setLocalUserData(userData);
        dispatch(UserStore.getAction_setUserData(userData));     
    }
 

    useEffect(()=>{

        api.getOrdersToBeCompleted(storeId)
        .then((data)=>{     processOrdersToBeCompleted(data)    })
        .catch((err)=>{     api.processApiError(err)        });

    },[]);

    const change = {
        goToLocation: goToLocation,
        acceptDelevery: acceptDelevery,
        completeDelivery: completeDelivery,
        logout: logout

    }

    return{
        state,change,config
    }
}






















