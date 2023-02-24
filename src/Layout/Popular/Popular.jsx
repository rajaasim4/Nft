import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import Heading from "../../Components/Heading/Heading";
import SlideCard from "../../Components/SlideCard/SlideCard";
import "./Popular.css";
const Popular = () => {
  return (
    <div className="Popular">
      <Heading title={"Like by Category"} />
      <Swiper
        // modules={[Navigation, Pagination]}
        // spaceBetween={50}
        // slidesPerView={3}
        // navigation={true}
        autoplay={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          769: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <SlideCard bgimg={c2} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard bgimg={c3} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard bgimg={c4} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard bgimg={c5} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard bgimg={c1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
const Slide = () => {
  return <></>;
};
export default Popular;
