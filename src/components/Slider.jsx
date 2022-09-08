import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCurrentViewportView } from "../hooks/useViewportView";
import Card from "./common/Card";

const Slider = ({ data }) => {
  const {isMobile} = useCurrentViewportView()
  return (
    <div>
      <Swiper spaceBetween={30} slidesPerView={isMobile?1.9:3.5}>
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
