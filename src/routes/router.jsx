import { createBrowserRouter } from "react-router";
import MainLayout from "../main/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/menu", element: <Menu></Menu> },
      { path: "/shop/:category", element: <Shop></Shop> },
    ],
  },
]);
