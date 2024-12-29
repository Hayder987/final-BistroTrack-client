import bgBanner from "../../assets/home/featured.jpg";
import SectionTitle from "../../pages/shared/SectionTitle";

const FormMenu = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bgBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment:"fixed"
      }}
      className=" p-6 py-14 mb-24 "
    >
      <div className="text-white">
        <SectionTitle
          subTitle={"Check it out"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="flex container gap-10 mx-auto flex-col lg:flex-row ">
          <div className="lg:w-1/2">
            <img src={bgBanner} alt="" className="" />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            <div className="">
              <p className="text-xl mb-3 md:text-2xl">March 23, 2024</p>
              <p className="text-2xl mb-3 md:text-3xl">WHERE CAN I GET SOME?</p>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
            </div>
            <div className=" text-left w-full">
                <button className="btn text-white uppercase text-xl font-medium btn-outline border-0 border-b-4">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMenu;
