// const axiosConfig = require("./config/axios-config")

import axiosInstance from "./config/axios-config.js";
import Store from "./data/store.js";

async function getStores() {
    try {
        const response = await axiosInstance.get("/api/stores");
        // console.log(response.data);
        return response.data
    } catch (err) {
        console.log(err);
    }
}

async function postStore() {
    try {
        const store = new Store()
        // console.log(JSON.stringify(user));
        const respose = await axiosInstance.post("/api/stores", store);
        return respose.data;
    } catch (error) {
        console.log(error)
    }
}


const promisse = new Promise((resolve, reject) => {
    getStores().then((stores)=>{
        console.log(stores);  
    });

    // postStore()
    // .then((respose) => {
    //     console.log(respose);
    // })
    // .catch((err) => { reject(err) })
}).then((result) => {
    console.log("end proces")
}).catch((err) => {
    console.log("Error:", err)
})

