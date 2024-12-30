const MenuButton = ({name}) => {
  return (
    <div className="mt-12 flex justify-center">
      <button className="btn btn-outline border-0 border-b-4 uppercase">
        {name}
      </button>
    </div>
  );
};

export default MenuButton;
