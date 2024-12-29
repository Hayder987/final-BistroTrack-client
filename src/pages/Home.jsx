import Banner from "../components/homeComponents/Banner";
import ChefService from "../components/homeComponents/ChefService";
import FormMenu from "../components/homeComponents/FormMenu";
import MenuSection from "../components/homeComponents/MenuSection";
import PhoneSection from "../components/homeComponents/PhoneSection";
import SwiperSlider from "../components/homeComponents/SwiperSlider";
import Testimonial from "../components/homeComponents/Testimonial";
import SectionTitle from "./shared/SectionTitle";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("/menu.json").then((res) => {
      setMenu(res.data.filter((fil) => fil.category === "popular"));
    });
  }, []);

  return (
    <div className="">
      <div className="mb-14 md:mb-20">
        <Banner></Banner>
      </div>
      <div className="container mx-auto mb-14 md:mb-20">
        <SectionTitle
          subTitle={"From 11:00am to 10:00pm"}
          title={"ORDER ONLINE"}
        ></SectionTitle>
        <SwiperSlider></SwiperSlider>
      </div>
      <div className="container mx-auto">
        <ChefService></ChefService>
      </div>
      <div className="container mx-auto mt-4">
        <SectionTitle
          subTitle={"Check it out"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
        <MenuSection menu={menu}></MenuSection>
      </div>
      <PhoneSection></PhoneSection>
      <FormMenu></FormMenu>
      <div className="">
        <SectionTitle
          subTitle={"What Our Clients Say"}
          title={"TESTIMONIALS"}
        ></SectionTitle>
        <div className="container mx-auto p-6 mb-24">
        <Testimonial></Testimonial>
        </div>
      </div>
    </div>
  );
};

export default Home;
