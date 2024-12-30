import MenuCard from "../../components/homeComponents/MenuCard";

const MenuDisplay = ({items}) => {
  return (
    <div className="grid container mx-auto grid-cols-1 gap-6 md:gap-12 md:grid-cols-2">
      {items.map((item) => (
        <MenuCard key={item._id} item={item}></MenuCard>
      ))}
    </div>
  );
};

export default MenuDisplay;
