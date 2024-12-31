import { Outlet, useLocation } from "react-router";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {
    const {pathname} = useLocation()
    const withOutNavFooter = pathname==="/login" || pathname==="/register"
    return (
        <div className="">
            {withOutNavFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {withOutNavFooter || <Footer></Footer>}
            
            
        </div>
    );
};

export default MainLayout;