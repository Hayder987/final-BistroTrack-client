import { useContext } from "react";
import { AuthContext } from "../context-api/AuthProvider";


const useAuth = () => {
    const authContext = useContext(AuthContext)
    return authContext
};

export default useAuth;