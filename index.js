// const axiosConfig = require("./config/axios-config")

import axiosInstance from "./config/axios-config.js";
import Store from "./data/store.js";
import StoreService from "./service/stores_service.js"




const promisse = new Promise(async (resolve, reject) => {

    try {
        const storeService = new StoreService();

        const stores = await storeService.getStores();
        console.log("Get all stores ", stores);

        const store = new Store();
        let storeById = null;

        if (stores.length> 0){
            storeById = await storeService.getStoreById(store.id);
            console.log("Get store by id ", storeById);
        }

        if (stores.length == 0 || !storeById) {
            const newStore = await storeService.postStore(store)
            console.log("Post store ", newStore)
            
            const storeExists = await storeService.getStoreById(store.id);
            console.log("Store exists ", storeExists);

            storeExists.name = "store 1 - updated";
            await storeService.putStore(storeExists.id, storeExists);

            const storeUpdated = await storeService.getStoreById(storeExists.id);
            console.log("Store updated ", storeUpdated);

            const deleted = await storeService.deleteStore(storeUpdated.id);
            console.log("Store deleted ", deleted);
        }



    } catch (error) {
        reject(error);
    }

}).then((result) => {
    console.log("end proces")
}).catch((err) => {
    console.log("Error:", err)
})