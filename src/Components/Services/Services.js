import React, { useState } from 'react'
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
    <section className='services section' id='services'>
      <h2 className="section-title">
        Services
      </h2>
      <span className="section-subtitle">
        What I offer
      </span>
      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <h3 className="services-title">
              <HiCode className='services-icon' />
              Frontend <br /> Engineer
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(1)}>
            View more {" "} < FaHandPointRight className='services-button-icon' />
          </span>
          <div className={toggle === 1 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              < MdCloseFullscreen className='services-modal-close' onClick={() => toggleTab(0)} />
              <h3 className="services-modal-title">
                Frontend Engineer
              </h3>
              <p className="services-modal-description">
                Providing quality service for clients and companies, with more than 2 years of experience
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon' />
                  <p className="services-modal-info">
                    I Develop and maintain the UI.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon' />
                  <p className="services-modal-info">
                    i create UX element interactions.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon' />
                  <p className="services-modal-info">
                    I fix bugs and test the project for usability
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content">
          <div>
            <h3 className="services-title">
              <HiOutlineDatabase className='services-icon' />
              Backend <br /> Engineer
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(2)}>
            View more {" "} < FaHandPointRight className='services-button-icon' />
          </span>
          <div className={toggle === 2 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              < MdCloseFullscreen className='services-modal-close' onClick={() => toggleTab(0)} />
              <h3 className="services-modal-title">
                Backend Engineer
              </h3>
              <p className="services-modal-description">
                Providing quality service for clients and companies, with more than 2 years of experience
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon' />
                  <p className="services-modal-info">
                    I Develop and maintain the UI.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon' />
                  <p className="services-modal-info">
                    i create UX element interactions.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon' />
                  <p className="services-modal-info">
                    I fix bugs and test the project for usability
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content">
          <div>
            <h3 className="services-title">
              <AiOutlineQrcode className='services-icon' />
              Mobile <br /> Engineer
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(3)}>
            View more {" "} < FaHandPointRight className='services-button-icon' />
          </span>
          <div className={toggle === 3 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              < MdCloseFullscreen className='services-modal-close' onClick={() => toggleTab(0)} />
              <h3 className="services-modal-title">
                Mobile Engineer
              </h3>
              <p className="services-modal-description">
                Providing quality service for clients and companies, with more than 2 years of experience
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon' />
                  <p className="services-modal-info">
                    I Develop and maintain the UI.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon' />
                  <p className="services-modal-info">
                    i create UX element interactions.
                  </p>
                </li>
                <li className="services-modal-service">
                  < BsPatchCheck className='services-modal-icon' />
                  <p className="services-modal-info">
                    I fix bugs and test the project for usability
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services