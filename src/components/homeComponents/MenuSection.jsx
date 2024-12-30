import MenuDisplay from "../../pages/shared/MenuDisplay";

const MenuSection = ({ menu }) => {
  return (
    <div>
      <MenuDisplay items={menu}></MenuDisplay>
      <div className="mt-12 flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 uppercase">View Full  Menu</button>
      </div>
    </div>
  );
};

export default MenuSection;
