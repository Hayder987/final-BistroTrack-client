import { RiDeleteBin6Fill } from "react-icons/ri";
import useCartData from "../hooks/useCartData";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CartTable = () => {
  const { cartData, refetch } = useCartData();
  const axiosUrl = useAxiosSecure()


  const deleteHandler= async(id)=>{
    await axiosUrl.delete(`/cart/${id}`)
    .then(res=>{
      refetch()
    //   TODO: 
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Item Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cartData.map((item, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>
                <img src={item?.image} alt="" className="w-10 h-10 rounded-full" />
              </td>
              <td>
                {item?.name}
              </td>
              <td>{item?.price}</td>
              <th className=" text-2xl text-red-600 cursor-pointer">
              <button onClick={()=> deleteHandler(item?._id)} className="">
                <RiDeleteBin6Fill />
              </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
