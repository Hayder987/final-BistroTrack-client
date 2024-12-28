import { NavLink } from "react-router";


const NavBar = () => {
    return (
        <div className="py-3 px-4 text-white fixed top-0 left-0 z-10 w-full
         bg-black bg-opacity-50 backdrop-blur-sm md:px-12 flex justify-between 
         items-center ">
            {/* logo */}
            <div className="">
              <h1 className="text-xl md:text-3xl font-bold">BistroTrack</h1>
              <p className="md:text-2xl font-semibold">Restaurant</p>
            </div>
            {/* menu */}
            <div className="">
               <ul>
                <NavLink to='/'><li>Home</li></NavLink>
               </ul>
            </div>
            {/* login */}
            <div className=""></div>
        </div>
    );
};

export default NavBar;