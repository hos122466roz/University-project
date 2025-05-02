import React from "react";
import "./hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,

  EffectCreative,

} from "swiper/modules";
import { slider } from "./data/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Hero = () => {
  return (
    <>
      <Swiper
    

        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        >
        {slider.map((item,index)=>(
          <SwiperSlide key={index}>
          <section className="slide section-p1">
            <img loading="lazy" src={item.cover} alt="گیاه پزشکی" />

            <div className="detalis">
              <h4>  {item.dec}</h4>
              <h1>{item.title}</h1>
              <h1></h1>
            </div>
          </section>
        </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
};

export default Hero;
