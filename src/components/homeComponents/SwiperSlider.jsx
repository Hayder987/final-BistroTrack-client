import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Slide from "../Slide";
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            400: {
              slidesPerView: 2, 
              spaceBetween: 10, 
            },
            768: {
              slidesPerView: 3, 
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide
            photo={slide1}
            text={"Salads"}
            ></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide
            photo={slide2}
            text={"Pizzas"}
            ></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide
            photo={slide3}
            text={"Soups"}
            ></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide
            photo={slide4}
            text={"desserts"}
            ></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide
            photo={slide5}
            text={"Salads"}
            ></Slide>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default SwiperSlider;
