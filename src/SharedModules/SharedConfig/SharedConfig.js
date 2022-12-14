
export default function useSharedConfig(){

    const LOCAL_BASE_URL = 'http://localhost/projects/food-cart-api/public/api/';
    const REMOTE_BASE_URL = 'https://homeshope.xyz/public/api/';
    const REMOTE_BASE_URL_TWO = 'http://139.59.93.2/public/api/';

    const LOCAL_CATEGORY_IMAGE_BASE = "http://localhost/projects/food-cart-api/storage/app/public/categories/";
    const REMOTE_CATEGORY_IMAGE_BASE = "https://homeshope.xyz/storage/app/public/categories/";
    const REMOTE_CATEGORY_IMAGE_BASE_TWO = "http://139.59.93.2/storage/app/public/categories/";


    const LOCAL_PRODUCT_IMAGE_BASE = "http://localhost/projects/food-cart-api/storage/app/public/products/";
    const REMOTE_PRODUCT_IMAGE_BASE = "https://homeshope.xyz/storage/app/public/products/";
    const REMOTE_PRODUCT_IMAGE_BASE_TWO = "http://139.59.93.2/storage/app/public/products/";

    const CURRENT_BASE_URL = REMOTE_BASE_URL;
    const CURRENT_CATEGORY_IMAGE_BASE = REMOTE_CATEGORY_IMAGE_BASE;
    const CURRENT_PRODUCT_IMAGE_BASE = REMOTE_PRODUCT_IMAGE_BASE;

    const ORDER_ID_MASK = 1111;
    const STORE_ID = 1;


    const ROOT_PATH = "/apps/restaurant/restaurant-delivery";    
    const SERVICE_WORKER_PATH = "http://localhost:3000/ServiceWorker.js";
    const SERVICE_WORKER_SCOPE = "http://localhost:3000/";
        
    // const ROOT_PATH = "/apps/restaurant/restaurant-delivery";    
    // const SERVICE_WORKER_PATH = "https://www.homeshope.shop/apps/restaurant/restaurant-delivery/ServiceWorker.js";
    // const SERVICE_WORKER_SCOPE = "https://www.homeshope.shop/apps/restaurant/restaurant-delivery/";


    // //local
    // const ROOT_PATH = "/apps/restaurant/restaurant-delivery";    
    // const SERVICE_WORKER_PATH = "http://localhost/apps/restaurant/restaurant-delivery/ServiceWorker.js";
    // const SERVICE_WORKER_SCOPE = "http://localhost/apps/restaurant/restaurant-delivery/";

    const config = {
        CURRENT_BASE_URL: CURRENT_BASE_URL,
        CURRENT_CATEGORY_IMAGE_BASE: CURRENT_CATEGORY_IMAGE_BASE,
        CURRENT_PRODUCT_IMAGE_BASE: CURRENT_PRODUCT_IMAGE_BASE,
        ORDER_ID_MASK: ORDER_ID_MASK,
        STORE_ID: STORE_ID,
        ROOT_PATH: ROOT_PATH,
        SERVICE_WORKER_PATH: SERVICE_WORKER_PATH,
        SERVICE_WORKER_SCOPE: SERVICE_WORKER_SCOPE

    }


    return{config}

}










