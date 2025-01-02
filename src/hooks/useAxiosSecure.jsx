import axios from "axios";

const axiosIntense = axios.create({
    baseURL: `${import.meta.env.VITE_ServerUrl}`
})
const useAxiosSecure = () => {
    
    return axiosIntense
};

export default useAxiosSecure;