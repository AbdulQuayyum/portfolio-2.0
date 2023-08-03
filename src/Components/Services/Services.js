import React, { useState } from 'react'
import { motion } from "framer-motion";

import { FadeInAnimation, StaggerContainer } from '../../Utilities/Motion/Motion';
import { TitleText, TypingText } from '../Index';
import { HiCode } from "react-icons/hi"
import { MdCloseFullscreen } from "react-icons/md"
import { FaHandPointRight } from "react-icons/fa"
import { BsPatchCheck } from "react-icons/bs"
import { HiOutlineDatabase } from "react-icons/hi"
import { AiOutlineQrcode } from "react-icons/ai"

const Services = () => {
  const [toggle, setToggle] = useState(0)

  const toggleTab = (index) => {
    setToggle(index)
  }

  return (
    <motion.section
      initial="hidden"
      variants={StaggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      whileInView="show"
      className='services main-section' id='Services'>
      <TitleText
        title="Services"
        textStyles="section-title dark:text-[#fff]" />
      <TypingText
        title="What does Abdul-Quayyum offer?"
        textStyles="section-subtitle dark:text-gray-400" />
      <motion.div
        variants={FadeInAnimation('up', 'tween', 0.2, 1)}
        className="services-container main-container main-grid">
        <div className="services-content dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
          <div>
            <h3 className="services-title dark:text-[#fff]">
              <HiCode className='services-icon dark:text-[#fff]' />
              Frontend <br /> Engineer
            </h3>
          </div>
          <span className="services-button dark:text-[#fff]" onClick={() => toggleTab(1)}>
            View more {" "} < FaHandPointRight className='services-button-icon dark:text-[#fff]' />
          </span>
          <div className={toggle === 1 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content dark:bg-[#1c1c24]">
              < MdCloseFullscreen className='services-modal-close dark:text-[#fff]' onClick={() => toggleTab(0)} />
              <h3 className="services-modal-title dark:text-[#fff]">
                Frontend Engineer
              </h3>
              <p className="services-modal-description dark:text-[#fff]">
                Providing quality service for clients and companies, with more than 2 years of experience
              </p>
              <ul className="services-modal-services main-grid">
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon dark:text-gray-300' />
                  <p className="services-modal-info dark:text-gray-300">
                    I Develop and maintain the UI.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon dark:text-gray-300' />
                  <p className="services-modal-info dark:text-gray-300">
                    i create UX element interactions.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon dark:text-gray-300' />
                  <p className="services-modal-info dark:text-gray-300">
                    I fix bugs and test the project for usability
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
          <div>
            <h3 className="services-title dark:text-[#fff]">
              <HiOutlineDatabase className='services-icon dark:text-[#fff]' />
              Backend <br /> Engineer
            </h3>
          </div>
          <span className="services-button dark:text-[#fff]" onClick={() => toggleTab(2)}>
            View more {" "} < FaHandPointRight className='services-button-icon dark:text-[#fff]' />
          </span>
          <div className={toggle === 2 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              < MdCloseFullscreen className='services-modal-close dark:text-[#fff]' onClick={() => toggleTab(0)} />
              <h3 className="services-modal-title dark:text-[#fff]">
                Backend Engineer
              </h3>
              <p className="services-modal-description dark:text-[#fff]">
                Providing quality service for clients and companies, with more than 1 year of experience
              </p>
              <ul className="services-modal-services main-grid">
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon dark:text-gray-300' />
                  <p className="services-modal-info dark:text-gray-300">
                    I implement algorithms and solve system related problems.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon dark:text-gray-300' />
                  <p className="services-modal-info dark:text-gray-300">
                    I manage APIs resources which work across devices.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon dark:text-gray-300' />
                  <p className="services-modal-info dark:text-gray-300">
                    I strore data and ensure that it is displayed to the right users.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
          <div>
            <h3 className="services-title dark:text-[#fff]">
              <AiOutlineQrcode className='services-icon dark:text-[#fff]' />
              Mobile <br /> Engineer
            </h3>
          </div>
          <span className="services-button dark:text-[#fff]" onClick={() => toggleTab(3)}>
            View more {" "} < FaHandPointRight className='services-button-icon dark:text-[#fff]' />
          </span>
          <div className={toggle === 3 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              < MdCloseFullscreen className='services-modal-close dark:text-[#fff]' onClick={() => toggleTab(0)} />
              <h3 className="services-modal-title dark:text-[#fff]">
                Mobile Engineer
              </h3>
              <p className="services-modal-description dark:text-[#fff]">
                Providing quality service for clients and companies, with nearly 1 year of experience
              </p>
              <ul className="services-modal-services main-grid">
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon dark:text-gray-300' />
                  <p className="services-modal-info dark:text-gray-300">
                    I Develop and maintain the UI.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon dark:text-gray-300' />
                  <p className="services-modal-info dark:text-gray-300">
                    i create UX element interactions.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon dark:text-gray-300' />
                  <p className="services-modal-info dark:text-gray-300">
                    I create cross platform applications
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Services