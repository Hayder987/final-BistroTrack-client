import MenuButton from "../../pages/shared/MenuButton";
import MenuDisplay from "../../pages/shared/MenuDisplay";

const MenuSection = ({ menu }) => {
  return (
    <div>
      <MenuDisplay items={menu}></MenuDisplay>
      <MenuButton name="View Full"></MenuButton>
    </div>
  );
};

export default MenuSection;
