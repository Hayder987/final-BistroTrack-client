import { Parallax, Background } from "react-parallax";

const CoverBanner = ({ img, title, subTitle }) => {
  return (
    <div className="mb-20">
      <Parallax
        blur={{ min: -40, max: 40 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="py-8 flex justify-center items-center min-h-[50vh] md:min-h-[70vh] md:py-16">
          <div className="w-full text-white lg:max-w-[1200px] mx-auto p-14 py-20 bg-black bg-opacity-45">
            <h1 className=" text-7xl uppercase font-extralight text-center mb-4">
              {title}
            </h1>
            <p className="text-center text-xl font-medium">{subTitle}</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default CoverBanner;
