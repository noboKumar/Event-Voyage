import React from "react";
import slider1 from "../../assets/event-photo-1.jpg";
import slider2 from "../../assets/event-photo-2.jpeg";
import slider3 from "../../assets/event-photo-3.jpeg";

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

const sliderData = [
  {
    imgUrl: slider1,
    title: "Electrifying Vibes: Live in Concert",
    description:
      "Fans revel in the energy of a live concert, with hands raised high under dazzling lights, celebrating the magic of music and shared excitement",
  },
  {
    imgUrl: slider2,
    title: "Engaging the Crowd: A Moment of Insight",
    description:
      "A dynamic speaker captivates the audience with a thought-provoking presentation, fostering an atmosphere of learning and inspiration in a professional setting",
  },
  {
    imgUrl: slider3,
    title: "Grand Stage Spectacle",
    description:
      "The stage is set for an unforgettable evening at the 4th ICI event, featuring stunning lights, elegant decor, and a promise of insightful discussions on wealth creation.",
  },
];

const Slider = () => {
  return (
    <div className="relative md:w-full">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, Keyboard]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        keyboard={{ enabled: true }}
      >
        {sliderData.map((slider, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-[300px] md:h-[700px] rounded-2xl object-cover"
              src={slider.imgUrl}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-2xl"></div>
            <div className="absolute top-5 left-5 md:top-3/6 md:left-20 z-10 text-white w-4/6 md:w-6/12 md:space-y-5 text-shadow-2xs">
              <h1 className="md:text-4xl text-2xl font-bold">{slider.title}</h1>
              <p>{slider.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
