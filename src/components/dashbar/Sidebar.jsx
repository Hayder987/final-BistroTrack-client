import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { FaBars, FaEnvelope, FaRegCalendarPlus } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdOutlineRateReview, MdPayments } from "react-icons/md";
import { NavLink } from "react-router";


const Sidebar = () => {
    return (
        <div className="p-4 md:p-6">
            {/* logo */}
          <div className="mb-12">
            <h1 className="text-xl md:text-2xl font-semibold">BISTRO BOSS</h1>
            <p className="font-medium uppercase">Restaurant</p>
          </div> 
          {/* menu */}
          <div className="">
            <ul className="flex font-medium flex-col gap-6">
                <NavLink to="dashboard"><li className="flex items-center gap-2"><span className=""><IoHome /></span> User Home</li></NavLink>
                <NavLink to="reservation"><li className="flex items-center uppercase gap-2"><span className=""><FaCalendarAlt /></span> Reservation</li></NavLink>
                <NavLink to="payment"><li className="flex items-center uppercase gap-2"><span className=""><MdPayments/></span> payment history</li></NavLink>
                <NavLink to="mycart"><li className="flex items-center uppercase gap-2"><span className=""><FaShoppingCart /></span> my cart</li></NavLink>
                <NavLink to="addReview"><li className="flex items-center uppercase gap-2"><span className=""><MdOutlineRateReview /></span> add review</li></NavLink>
                <NavLink to="myBooking"><li className="flex items-center uppercase gap-2"><span className=""><FaRegCalendarPlus /></span> my booking</li></NavLink>
            </ul>
          </div> 
          <div className="border-b-2 border-white my-14 px-4"></div>
          <div className="">
            <ul className="flex font-medium flex-col gap-6">
             <NavLink to="/"><li className="flex items-center gap-2 uppercase"><span className=""><IoHome /></span>Home</li></NavLink>
             <NavLink to="/menu"><li className="flex items-center gap-2 uppercase"><span className=""><FaBars /></span>Menu</li></NavLink>
             <NavLink to="/shop/salad"><li className="flex items-center gap-2 uppercase"><span className=""><GiShoppingBag /></span>Shop</li></NavLink>
             <NavLink to="/"><li className="flex items-center gap-2 uppercase"><span className=""><FaEnvelope /></span>Contact</li></NavLink>
            </ul>
          </div> 
        </div>
    );
};

export default Sidebar;