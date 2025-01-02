import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";
import { PiShoppingCartBold } from "react-icons/pi";

const NavBar = () => {
  const { user, logOutUser, loading } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      await logOutUser();
    } catch (err) {
      Swal.fire(`${err}`);
    } finally {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Logout SuccessFully",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/login");
    }
  };

  return (
    <div
      className="py-3 px-4 text-white fixed top-0 left-0 z-10 w-full
         bg-black bg-opacity-50 backdrop-blur-sm md:px-12 flex justify-between 
         items-center "
    >
      {/* logo */}
      <div className="">
        <h1 className="text-xl md:text-3xl font-bold">BistroTrack</h1>
        <p className="md:text-2xl font-semibold">Restaurant</p>
      </div>
      {/* menu */}
      <div>
        <ul className="flex justify-center items-center gap-10">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/menu">
            <li> Menu</li>
          </NavLink>
          <NavLink to="/shop/salad">
            <li>Shop</li>
          </NavLink>
          <NavLink to="/">
            <li className="flex items-center gap-2"><PiShoppingCartBold className="text-2xl" /> 
            <span className="bg-slate-100 rounded-full px-3 text-orange-600">0</span></li>
          </NavLink>
          <NavLink to="/dashboard">
            <li>Dashboard</li>
          </NavLink>
        </ul>
      </div>
      {/* login */}
      {loading?<div></div>:
      <div className="">
      {user ? (
        <div className="flex justify-center border bg-slate-100 border-orange-500 rounded-lg py-1 px-2 items-center gap-3">
          <img
            src={user?.photoURL}
            referrerPolicy="no-referrer"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <button
            onClick={logOutHandler}
            className="text-3xl text-gray-800"
          >
            <FiLogOut />
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button className="bg-orange-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-semibold">
            Login
          </button>
        </Link>
      )}
    </div>
      }
    </div>
  );
};

export default NavBar;
