import "./AboutSliders.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutSliders = () => {
  return (
    <div className="about_sliders_container">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          750: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={10}
        loop
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        autoplay={{ delay: 1000 }}
        modules={[Autoplay, Navigation, A11y, Pagination]}
      >
        <SwiperSlide>
          <img src="https://proworksps.com/wp-content/uploads/2023/09/Jenniferarmsfolde.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://proworksps.com/wp-content/uploads/2023/09/Resized_20230927_131353-768x432.jpeg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://proworksps.com/wp-content/uploads/2023/09/Proworks2017banner.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://proworksps.com/wp-content/uploads/2023/09/Proworks2017banner.jpeg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutSliders;
