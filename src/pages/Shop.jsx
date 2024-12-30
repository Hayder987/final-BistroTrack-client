import { useParams } from "react-router";
import CoverBanner from "./shared/CoverBanner";
import bannerImg from '../assets/shop/banner2.jpg'
import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard";
import axios from "axios";

const Shop = () => {
  const { category } = useParams();
  const [catData, setCatData] = useState(category)
  const [categoryMenu, setCategoryMenu] = useState([])
  const [totalItems, setTotalItems] = useState(null)
  const itemPerPage = 6 
  const pages = Math.ceil(totalItems/itemPerPage);
  const page = [...Array(pages).keys()]
  const [currentPage, setCurrentPage]= useState(0)
 

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_ServerUrl}/categoryData/${catData}?page=${currentPage}&limit=${itemPerPage}`)
    .then(res=>{
        setCategoryMenu(res.data.data);
        setTotalItems(res.data.totalItems)
    })
  }, [catData, currentPage, itemPerPage])


  return (
    <div className="mb-20">
      <CoverBanner
        img={bannerImg}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      ></CoverBanner>
      <div className="flex justify-center items-center p-8">
        <div className="flex items-center gap-8 md:text-2xl font-semibold">
            <button onClick={()=> {
                setCatData("salad")
                setCurrentPage(0)
            }} className={`uppercase ${catData==="salad" ? "border-b-4 border-orange-400":""}`}>Salad</button>
            <button onClick={()=> {
                setCatData("pizza")
                setCurrentPage(0)
            }} className={`uppercase ${catData==="pizza" ? "border-b-4 border-orange-400":""}`}>pizza</button>
            <button onClick={()=> {
                setCatData("soup")
                setCurrentPage(0)
            }} className={`uppercase ${catData==="soup" ? "border-b-4 border-orange-400":""}`}>soups</button>
            <button onClick={()=> {
                setCatData("dessert")
                setCurrentPage(0)
            }} className={`uppercase ${catData==="dessert" ? "border-b-4 border-orange-400":""}`}>desserts</button>
        </div>
      </div>
      {/* card */}
      <div className="container p-6  mx-auto grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {
            categoryMenu.map(item=> <ShopCard key={item._id} item={item}></ShopCard>)
        }
      </div>
      <div className="flex py-6 justify-center items-center">
        <div className="flex justify-center items-center gap-4">
            <button
            onClick={()=> {
                if(currentPage>0){
                    setCurrentPage(currentPage - 1)
                }
            }}
             className="p-2 bg-slate-800 text-white px-5 font-semibold rounded-lg">Prev</button>
            {
                page.map(pageNo=> (
                    <button
                    onClick={()=>setCurrentPage(pageNo)}
                     key={pageNo} 
                     className={`w-8 h-8 ${currentPage===pageNo ? "bg-slate-800 text-white" :"bg-slate-200"} flex text-xl items-center justify-center rounded-full p-2 font-bold `}>
                        {pageNo + 1}</button>
                ))
            }
        <button 
        onClick={()=>{
            if(currentPage<page.length -1){
                setCurrentPage(currentPage + 1)
            }
        }}
        className="p-2 bg-slate-800 text-white px-5 font-semibold rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
