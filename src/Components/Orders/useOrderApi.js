import useSharedConfig from "../../SharedModules/SharedConfig/SharedConfig"
import useSharedLibrary from "../../SharedModules/SharedLibrary/useSharedLibrary";

export default function useOrdersApi(){

    let {config} = useSharedConfig();
    let {sharedLibrary} = useSharedLibrary();

    let request;
    let REQUEST_OPTIONS;
    let END_POINT;
    let BASE_URL = config.CURRENT_BASE_URL;

    function getOrdersToBeCompleted(storeId){

        END_POINT = BASE_URL+'getOrdersToBeCompleted?store_id='+storeId;

        REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());

    }

    function sendAcceptDeliveryRequest(orderId){

        END_POINT = BASE_URL+'acceptDelivery?order_id='+orderId;

        REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());
    }

    function sendCompleteDeliveryRequest(orderId){

        END_POINT = BASE_URL+'completeDelivery?order_id='+orderId;

        REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());
    }

    function processApiError(err){

        sharedLibrary.openDialogue("Could not connect to the server.");
    }

    const api = {
        getOrdersToBeCompleted: getOrdersToBeCompleted,
        sendAcceptDeliveryRequest: sendAcceptDeliveryRequest,
        sendCompleteDeliveryRequest: sendCompleteDeliveryRequest,
        processApiError: processApiError
    }

    return {api}


}