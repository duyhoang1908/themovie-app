import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./common/Card";

const Slider = ({ data }) => {
  
  return (
    <div>
      <Swiper spaceBetween={30} slidesPerView={3.5}>
        {data.map((film) => (
          <SwiperSlide key={film.id}>
            <Card film={film}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
