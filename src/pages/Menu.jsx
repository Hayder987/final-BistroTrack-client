import CoverBanner from "./shared/CoverBanner";
import coverBanner from "../assets/menu/banner3.jpg";
import SectionTitle from "./shared/SectionTitle";

const Menu = () => {
  return (
    <div>
      <div className="mb-20">
        <CoverBanner
          img={coverBanner}
          title="OUR MENU"
          subTitle="Would you like to try a dish?"
        ></CoverBanner>
      </div>
      <SectionTitle subTitle="Don't miss" title="TODAY'S OFFER"></SectionTitle>
      
    </div>
  );
};

export default Menu;
