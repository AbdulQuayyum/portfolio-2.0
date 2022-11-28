import React from 'react'
import { BsAward, BsBriefcase, BsHeadset } from "react-icons/bs"

const Info = () => {
  return (
    <div className='about-info grid'>
        <div className="about-box">
            < BsAward className='about-icon'/>
            <h3 className="about-title">Experience</h3>
            <span className="about-subtitle">2 Years</span>
        </div>
        <div className="about-box">
            < BsBriefcase className="about-icon"/>
            <h3 className="about-title">Completed</h3>
            <span className="about-subtitle">80+ Projects</span>
        </div>
        <div className="about-box">
            <BsHeadset className="about-icon"/>
            <h3 className="about-title">Support</h3>
            <span className="about-subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info