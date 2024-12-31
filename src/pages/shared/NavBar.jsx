import { Link, NavLink } from "react-router";


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
            <div >
               <ul className="flex justify-center items-center gap-10">
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/menu'><li> Menu</li></NavLink>
                <NavLink to='/shop/salad'><li>Shop</li></NavLink>
               </ul>
            </div>
            {/* login */}
            <div className="">
                <Link to='/login'><button className="bg-orange-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-semibold">Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;