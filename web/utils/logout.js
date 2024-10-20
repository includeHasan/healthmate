
import api from "./api"

export const handleLogout = async (router) =>{
    try {
        const response = await api.get('/user/logout');
        if (response.data.success) {
            localStorage.clear();
            alert(response.data.message);
            router.push("/");
        }
        else{
            alert("Something went wrong ...");
        }
    } catch (error) {
        console.log(error);
        alert(error.response?.data?.message);
    }
}