import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "assets/slider/1.png";
import slider2 from "assets/slider/2.png";
import slider3 from "assets/slider/3.png";
import slider4 from "assets/slider/4.png";
import slider5 from "assets/slider/5.png";
import { SliderPartDiv } from "./sliderpart.styled";

const SliderPart = () => {
  const [screen, setscreen] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setscreen(window.innerWidth));
    setscreen(window.innerWidth);
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <SliderPartDiv className="mix-blend-darken border-t border-b border-[white] ">
      <Swiper
        slidesPerView={
          screen > 1024 ? 5 : screen > 768 ? 4 : screen > 560 ? 3 : 2
        }
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slider1}
            alt="slider1"
            className="cursor-pointer hover:brightness-[130%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            alt="slider2"
            className="cursor-pointer hover:brightness-[130%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            alt="slider3"
            className="cursor-pointer hover:brightness-[130%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider4}
            alt="slider4"
            className="cursor-pointer hover:brightness-[130%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider5}
            alt="slider5"
            className="cursor-pointer hover:brightness-[130%]"
          />
        </SwiperSlide>
      </Swiper>
    </SliderPartDiv>
  );
};

export default SliderPart;
