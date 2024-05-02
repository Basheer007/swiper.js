import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import image1 from "./assets/image-1.jpg";
import image2 from "./assets/image-2.jpg";
import image3 from "./assets/image-3.jpg";
import image4 from "./assets/image-4.jpg";
export default function App() {
  window.addEventListener("DOMContentLoaded", function () {
    console.log("content loaded");
  });
  return (
    <>
      <div></div>

      <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-bl from-slate-200 to-sky-300">
        <Swiper
          className="w-[200px] h-auto"
          effect={"cube"}
          loop={true}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 40,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
        >
          <SwiperSlide>
            <img src={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
