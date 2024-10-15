import { useState } from "react";
import api from "./api"

const getUser = async () => {
    let user =null;
    try {
        const response = await api.get('/user/getUser');
        if(response.data.success){
            user = response.data.user;
            
        }
    } catch (error) {
        console.log(error);
        
    }
    return user;
}
export default getUser;