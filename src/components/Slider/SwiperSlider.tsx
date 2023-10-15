"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const SwiperSlider = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      grabCursor={true}
      modules={[Autoplay, Navigation]}
      navigation={true}
      slidesPerView={1}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
