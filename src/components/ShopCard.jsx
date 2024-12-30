const ShopCard = ({ item }) => {
  return (
    <div className="card bg-gray-50 shadow-xl">
      <figure>
        <img src={item?.image} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2 text-center">{item?.name}</h2>
        <p className="text-center mb-2">{item?.recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline bg-slate-200 border-0 border-b-4 uppercase">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
