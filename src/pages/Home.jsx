import Banner from "../components/homeComponents/Banner";
import SectionTitle from "./shared/SectionTitle";


const Home = () => {
    return (
        <div className="">
           <div className="mb-14 md:mb-20">
           <Banner></Banner>
           </div>
           <SectionTitle
           subTitle={"From 11:00am to 10:00pm"}
           title={"ORDER ONLINE"}
           ></SectionTitle>
        </div>
    );
};

export default Home;