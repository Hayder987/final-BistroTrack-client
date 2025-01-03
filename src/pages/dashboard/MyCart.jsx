import CartTable from "../../components/CartTable";
import useCartData from "../../hooks/useCartData";
import SectionTitle from "../shared/SectionTitle";

const MyCart = () => {
  const { cartData } = useCartData();
  const tottalPrice = cartData.reduce((total, items) => total + items.price, 0);

  return (
    <div>
      <SectionTitle subTitle="My Cart" title="ADD MORE?"></SectionTitle>

      <div className="flex flex-wrap justify-evenly items-center">
        <h1 className="uppercase text-base md:text-2xl lg:text-3xl font-semibold">
          Total Items: 6
        </h1>
        <h1 className="uppercase text-base md:text-2xl lg:text-3xl font-semibold">
          total price: ${tottalPrice}
        </h1>
        <button className="uppercase bg-[#d1a054] py-2 font-semibold px-4 rounded-lg text-white text-xl">
          Pay
        </button>
      </div>
      {/* table */}
      <div className="">
        <CartTable></CartTable>
      </div>
    </div>
  );
};

export default MyCart;
