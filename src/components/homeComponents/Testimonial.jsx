import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_ServerUrl}/reviewItem`).then((res) => {
      setReview(res.data);
    });
  }, []);

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {review.map((item) => (
        <SwiperSlide key={item._id}>
          <div className="flex justify-center mb-4 ">
          <Rating style={{ maxWidth: 180 }} value={item?.rating} readOnly />
          </div>
          <div className="p-4">
            <p className="flex justify-center text-7xl">
            <BiSolidQuoteSingleLeft /> <BiSolidQuoteSingleLeft />
            </p>
            <h3 className="text-center p-8 mb-10">{item?.details}</h3>
            <h1 className="text-center text-3xl text-orange-400">{item?.name}</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
