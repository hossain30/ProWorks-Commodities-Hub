import "./Partners.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slides from "./mock.json";

const Partners = () => {
  return (
    <div className="partners_container">
    <p>Our Partners</p>
      <Swiper
      loop
autoplay={{delay:1000}}

        // slidesPerView={3}
        className="swiper"
        modules={[Navigation, Pagination, A11y,Autoplay]}
        navigation
        pagination={{ clickable: true }}
    spaceBetween={20}

    breakpoints={{
          0: { slidesPerView: 1},
          750: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="semi_swiper" key={slide.image}>
            <img src={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
