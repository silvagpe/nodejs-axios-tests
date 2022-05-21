import axiosInstance from "../config/axios-config.js";
import Store from "../data/store.js";

export default class StoreService {

    async getStores() {
        try {
            const response = await axiosInstance.get("/api/stores");
            return response.data
        } catch (error) {
            throw error;
        }
    }


    /**
     * 
     * @param {Number} id 
     * @returns Promise<Store>
     */
    async getStoreById(id) {
        try {
            const response = await axiosInstance.get(`/api/stores/${id}`);
            return response.data
        } catch (error) {
            throw error;
        }
    }

    /**
     * 
     * @param {Store} store 
     * @returns 
     */
    async postStore(store) {
        try {
            const respose = await axiosInstance.post("/api/stores", store);
            return respose.data;
        } catch (error) {
            throw error;
        }
    }
    /* 
     * @param {Number} id 
     * @param {Store} store 
     * @returns 
     */
    async putStore(id, store) {
        try {
            const respose = await axiosInstance.put(`/api/stores/${id}`, store);
            return respose.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * 
     * @param {Number} id 
     * @returns Boolean  
     */
    async deleteStore(id) {
        try {
            const respose = await axiosInstance.delete(`/api/stores/${id}`);
            return (respose.status >= 200 && respose.status < 300);
        } catch (error) {            
            throw error;
        }
    }
}