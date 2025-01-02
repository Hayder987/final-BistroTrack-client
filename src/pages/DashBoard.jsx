import { Outlet } from "react-router";
import Sidebar from "../components/dashbar/Sidebar";

const DashBoard = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="flex justify-center items-center">
        {/* sidebar */}
        <div className="w-8/12 z-10 md:w-3/12 bg-[#d1a054] min-h-[100vh]">
         <Sidebar></Sidebar>
        </div>
        {/* content Outlet */}
        <div className="w-full p-6 md:w-9/12 bg-slate-50 flex-1 min-h-[100vh] ">
         <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
