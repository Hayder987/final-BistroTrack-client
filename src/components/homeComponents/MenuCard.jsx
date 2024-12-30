

const MenuCard = ({item}) => {
    
    return (
        <div className="flex items-center gap-6">
          <div className="w-3/12">
            <img 
            style={{borderRadius:'0 200px 200px 200px'}}
            src={item?.image} alt="" className="w-full h-[120px] " />
          </div>  
          <div className="w-9/12">
            <div className="flex justify-between items-center">
                <p className="text-xl uppercase font-medium mb-2">{item?.name}--------------</p>
                <p className="font-semibold text-orange-400">${item?.price}</p>
            </div>
            <p className="text-gray-600">{item?.recipe}</p>
          </div>
        </div>
    );
};

export default MenuCard;