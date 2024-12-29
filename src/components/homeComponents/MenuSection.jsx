import MenuCard from "./MenuCard";

const MenuSection = ({ menu }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2">
        {menu.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>

    </div>
  );
};

export default MenuSection;
