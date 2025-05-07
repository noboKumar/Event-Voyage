import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const Review = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("reviewData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="py-5">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Our Happy Clients
        </h1>
        <div className="bg-primary w-10 h-1 mt-2"></div>
      </div>
      <div className="relative md:w-full text-center">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, Keyboard]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={data.length > 3}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          keyboard={{ enabled: true }}
        >
          {data.map((reviewData, index) => (
            <SwiperSlide className="py-10 space-y-2" key={index}>
              <img className="mx-auto rounded-full border-2 p-1 border-gray-300" src={reviewData.img} alt="" />
              <h2 className="text-xl md:w-4/10 mx-auto">"{reviewData.review}"</h2>
              <h3 className="text-2xl font-semibold">{reviewData.name}</h3>
              <p>{reviewData.occupation}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
