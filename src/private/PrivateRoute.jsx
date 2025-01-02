import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    const {pathname} = useLocation(); 

    if(user){
        return children
    }
    return <Navigate 
    to="/login" 
    state={{ from: pathname }} 
  />
};

export default PrivateRoute;