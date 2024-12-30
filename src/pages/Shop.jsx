import { useParams } from "react-router";
import CoverBanner from "./shared/CoverBanner";
import bannerImg from '../assets/shop/banner2.jpg'
import useData from "../hooks/useData";
import { useState } from "react";
import ShopCard from "../components/ShopCard";

const Shop = () => {
  const { category } = useParams();
  const [menu] = useData()
  const [catData, setCatData] = useState(category)

  const categoryMenu = menu.filter(fill=> fill.category === catData)


  return (
    <div>
      <CoverBanner
        img={bannerImg}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      ></CoverBanner>
      <div className="flex justify-center items-center p-8">
        <div className="flex items-center gap-8 md:text-2xl font-semibold">
            <button onClick={()=> setCatData("salad")} className={`uppercase ${catData==="salad" ? "border-b-4 border-orange-400":""}`}>Salad</button>
            <button onClick={()=> setCatData("pizza")} className={`uppercase ${catData==="pizza" ? "border-b-4 border-orange-400":""}`}>pizza</button>
            <button onClick={()=> setCatData("soup")} className={`uppercase ${catData==="soup" ? "border-b-4 border-orange-400":""}`}>soups</button>
            <button onClick={()=> setCatData("dessert")} className={`uppercase ${catData==="dessert" ? "border-b-4 border-orange-400":""}`}>desserts</button>
        </div>
      </div>
      {/* card */}
      <div className="container p-6 mb-20 mx-auto grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {
            categoryMenu.map(item=> <ShopCard key={item._id} item={item}></ShopCard>)
        }
      </div>
    </div>
  );
};

export default Shop;
