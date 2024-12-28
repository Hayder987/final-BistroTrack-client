import Banner from "../components/homeComponents/Banner";
import SwiperSlider from "../components/homeComponents/SwiperSlider";
import SectionTitle from "./shared/SectionTitle";

const Home = () => {
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
         
      </div>
    </div>
  );
};

export default Home;
