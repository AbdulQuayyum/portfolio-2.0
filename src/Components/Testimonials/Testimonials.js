import React from 'react'
import { motion } from "framer-motion";

import { FadeInAnimation, StaggerContainer } from '../../Utilities/Motion/Motion';
import { TitleText, TypingText } from '../Index';
import { Data } from './Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Autoplay, Pagination } from "swiper"

const Testimonials = () => {
  return (
    <motion.section
      initial="hidden"
      variants={StaggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      whileInView="show"
      className="testimonial main-container main-section">
      <TitleText
        title="Testimonials"
        textStyles="section-title dark:text-[#fff]" />
      <TypingText
        title="What people say about Abdul-Quayyum"
        textStyles="section-subtitle dark:text-gray-400" />
      <motion.div
        variants={FadeInAnimation('up', 'tween', 0.2, 1)}>
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
          {Data.map(({ id, image, name, linkedInLink, occupation, description }) => {
            return (
              <SwiperSlide className="testimonial-card  dark:bg-transparent dark:border-[#fff] dark:border-[1px]" key={id}>
                <img src={image} alt={name} className="testimonial-img" />
                <h3 className="testimonial-name dark:text-[#fff]">
                  <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </h3>
                <span className="testimonial-occuption dark:text-gray-200">{occupation}</span>
                <p className="testimonial-description dark:text-gray-300">{description}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  )
}

export default Testimonials