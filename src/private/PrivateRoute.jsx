import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import LoaderSpinner from "../pages/shared/LoaderSpinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const {pathname} = useLocation(); 

    if(loading){
      return <LoaderSpinner></LoaderSpinner>
    }

    if(user){
        return children
    }
    return <Navigate 
    to="/login" 
    state={{ from: pathname }} 
  />
};

export default PrivateRoute;