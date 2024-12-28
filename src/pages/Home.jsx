import Banner from "../components/homeComponents/Banner";
import ChefService from "../components/homeComponents/ChefService";
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
        <ChefService></ChefService>
      </div>
      <div className="container mx-auto mt-4">
        <SectionTitle
          subTitle={"Check it out"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
      </div>
    </div>
  );
};

export default Home;
