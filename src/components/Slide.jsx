

const Slide = ({photo, text}) => {
    return (
        <div className="flex justify-center items-center">
           <div className="">
           <img src={photo} alt="" className="" /> 
           <p className="uppercase text-3xl -mt-12 text-gray-200 mb-20 text-center">{text}</p>
           </div>
        </div>
    );
};

export default Slide;