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

    function goToLocation(item){

        console.log(item.location[0]);
        window.location.assign("https://www.google.com/maps/search/?api=1&query="+item.location[0].lat+"%2C"+item.location[0].lng);
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

    let potbc_payload_modified = []
    function processOrdersToBeCompleted(data){

        potbc_payload_modified = [];

        if(data.status == "success"){

            potbc_payload_modified = data.payload.map((item)=>{
                return {...item,location: JSON.parse(item.location)}
            });

            setState((prevState)=>{
                return {...prevState, data: potbc_payload_modified}
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

    function callCustomer(item){

        window.open("tel:+918086730300");
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
        logout: logout,
        callCustomer: callCustomer

    }

    return{
        state,change,config
    }
}






















