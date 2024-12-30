import { Outlet } from "react-router";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {
    return (
        <div className="p-2">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;