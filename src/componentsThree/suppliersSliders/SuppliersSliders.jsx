import "./SuppliersSliders.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css/bundle";
import slides from "./mock.json";

const SuppliersSliders = () => {
  return (
    <Swiper
      className="suppliers_sliders_container"
      spaceBetween={5}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000 }}
      loop
      modules={[Navigation, Pagination, Autoplay, A11y]}
      breakpoints={{
        0: { slidesPerView: 1 },
        750: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
{slides.map((slide,index)=><SwiperSlide key={index}>
    <img src={slide.image} alt={slide.title} />
</SwiperSlide>)}

    </Swiper>
  );
};

export default SuppliersSliders;
