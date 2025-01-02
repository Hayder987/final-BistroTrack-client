import { useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ShopCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const axiosSecure = useAxiosSecure();
  const { _id, name, recipe, image, category, price } = item || {};

  const cart = {
    email: user?.email,
    name,
    productId: _id,
    recipe,
    image,
    category,
    price,
  };

  const cartHandler = async () => {
    if (user && user?.email) {
      await axiosSecure.post(`/cart`, cart);
    } else {
      Swal.fire({
        title: "You Are Not Login?",
        text: "Do You want to Login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Agreed!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: pathname } });
        }
      });
    }
  };

  return (
    <div className="card relative bg-gray-50 shadow-xl">
      <figure>
        <img src={item?.image} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2 text-center">
          {item?.name}
        </h2>
        <p className="text-center mb-2">{item?.recipe}</p>
        <p className="absolute font-semibold bg-slate-200 rounded-md p-2 text-orange-400 top-4 right-2">
          ${item?.price}
        </p>
        <div className="card-actions justify-center">
          <button
            onClick={cartHandler}
            className="btn btn-outline bg-slate-200 border-0 border-b-4 uppercase"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
