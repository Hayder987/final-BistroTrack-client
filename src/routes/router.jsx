import { createBrowserRouter } from "react-router";
import MainLayout from "../main/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/DashBoard";
import PrivateRoute from "../private/PrivateRoute";
import UserHome from "../pages/dashboard/UserHome";
import Reservation from "../pages/dashboard/Reservation";
import PaymentHistory from "../pages/dashboard/PaymentHistory";
import MyCart from "../pages/dashboard/MyCart";
import AddReview from "../pages/dashboard/AddReview";
import MyBooking from "../pages/dashboard/MyBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/menu", element: <Menu></Menu> },
      { path: "/shop/:category", element: <Shop></Shop> },
      {path:'/login', element:<Login></Login>},
      {path:'/register', element:<Register></Register>}
    ],
  },
  {           
    path:"dashboard",
    element:<DashBoard></DashBoard>,
    children:[
      {path:'dashboard', element:<PrivateRoute><UserHome></UserHome></PrivateRoute>},
      {path:'reservation', element:<PrivateRoute><Reservation></Reservation></PrivateRoute>},
      {path: 'payment' , element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>},
      {path: 'mycart' , element:<PrivateRoute><MyCart></MyCart></PrivateRoute>},
      {path: 'addReview' , element:<PrivateRoute><AddReview></AddReview></PrivateRoute>},
      {path: 'myBooking' , element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>}
    ]
  }
]);
