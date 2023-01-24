import React from 'react'
import { Data } from './Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial main-container main-section">
      <h2 className="section-title dark:text-[#fff]">Testimonials</h2>
      <span className="section-subtitle dark:text-gray-400">What people say about Abdul-Quayyum</span>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          744: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="testimonial-container">
        {Data.map(({ id, image, name, occupation, description }) => {
          return (
            <SwiperSlide className="testimonial-card  dark:bg-transparent dark:border-[#fff] dark:border-[1px]" key={id}>
              <img src={image} alt={name} className="testimonial-img" />
              <h3 className="testimonial-name dark:text-[#fff]">{name}</h3>
              <span className="testimonial-occuption dark:text-gray-200">{occupation}</span>
              <p className="testimonial-description dark:text-gray-300">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials