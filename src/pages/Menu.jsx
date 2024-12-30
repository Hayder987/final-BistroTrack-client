import CoverBanner from "./shared/CoverBanner";
import coverBanner from "../assets/menu/banner3.jpg";
import SectionTitle from "./shared/SectionTitle";
import useData from "../hooks/useData";
import MenuDisplay from "./shared/MenuDisplay";
import desertBg from "../assets/menu/dessert-bg.jpeg";
import MenuButton from "./shared/MenuButton";
import pizaBg from "../assets/menu/pizza-bg.jpg";
import saladBg from "../assets/menu/salad-bg.jpg";
import soupBg from "../assets/menu/soup-bg.jpg";
import { Link } from "react-router";

const Menu = () => {
  const [menu] = useData();
  const offered = menu.filter((fill) => fill.category === "offered");
  const dessert = menu.filter((fill) => fill.category === "dessert");
  const pizza = menu.filter((fill) => fill.category === "pizza");
  const salad = menu.filter((fill) => fill.category === "salad");
  const soup = menu.filter((fill) => fill.category === "soup");

  return (
    <div>
      <div className="mb-20">
        <CoverBanner
          img={coverBanner}
          title="OUR MENU"
          subTitle="Would you like to try a dish?"
        ></CoverBanner>
      </div>
      <div className="mb-20">
        <SectionTitle
          subTitle="Don't miss"
          title="TODAY'S OFFER"
        ></SectionTitle>
        <MenuDisplay items={offered}></MenuDisplay>
        <MenuButton name="ORDER YOUR FAVOURITE FOOD"></MenuButton>
      </div>
      {/* desert */}
      <div className="mb-20">
        <CoverBanner
          img={desertBg}
          title="DESSERTS"
          subTitle="Desserts are sweet dishes typically served at the end of a meal. "
        ></CoverBanner>
        <MenuDisplay items={dessert}></MenuDisplay>
        <Link to='/shop/dessert'><MenuButton name="ORDER YOUR FAVOURITE FOOD"></MenuButton></Link>
      </div>
      {/* pizza */}
      <div className="mb-20">
        <CoverBanner
          img={pizaBg}
          title="pizza"
          subTitle="With tomato sauce, cheese, and various toppings like vegetables, meats, and herbs. "
        ></CoverBanner>
        <MenuDisplay items={pizza}></MenuDisplay>
        <Link to='/shop/pizza'><MenuButton name="ORDER YOUR FAVOURITE FOOD"></MenuButton></Link>
      </div>
      {/* salad */}
      <div className="mb-20">
        <CoverBanner
          img={saladBg}
          title="salad"
          subTitle="Salad is a healthy dish made by combining raw or cooked vegetables, fruits, and other ingredients  "
        ></CoverBanner>
        <MenuDisplay items={salad}></MenuDisplay>
        <Link to='/shop/salad'><MenuButton name="ORDER YOUR FAVOURITE FOOD"></MenuButton></Link>
      </div>
      {/* soup */}
      <div className="mb-20">
        <CoverBanner
          img={soupBg}
          title="soup"
          subTitle="Soup is a warm and comforting dish made by combining ingredients such as vegetables, meat, fish "
        ></CoverBanner>
        <MenuDisplay items={soup}></MenuDisplay>
        <Link to='/shop/soup'><MenuButton name="ORDER YOUR FAVOURITE FOOD"></MenuButton></Link>
      </div>
    </div>
  );
};

export default Menu;
