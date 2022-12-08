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
    <section className="testimonial container section">
      <h2 className="section-title">Testimonials</h2>
      <span className="section-subtitle">What people say about Abdul-Quayyum</span>
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
            <SwiperSlide className="testimonial-card" key={id}>
              <img src={image} alt={name} className="testimonial-img" />
              <h3 className="testimonial-name">{name}</h3>
              <span className="testimonial-occuption">{occupation}</span>
              <p className="testimonial-description">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials