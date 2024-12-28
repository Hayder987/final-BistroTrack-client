import { createBrowserRouter } from "react-router";
import MainLayout from "../main/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {path:'/',
             element:<Home></Home>
            }
        ]
    }
])