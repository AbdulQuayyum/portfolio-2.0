import React from 'react'
import { BsAward, BsBriefcase, BsHeadset } from "react-icons/bs"

const Info = () => {
  return (
    <div className='about-info main-grid'>
        <div className="about-box dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
            < BsAward className='about-icon dark:text-[#fff]'/>
            <h3 className="about-title dark:text-[#fff]">Experience</h3>
            <span className="about-subtitle dark:text-[#fff]">3 Years+</span>
        </div>
        <div className="about-box dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
            < BsBriefcase className="about-icon dark:text-[#fff]"/>
            <h3 className="about-title dark:text-[#fff]">Completed</h3>
            <span className="about-subtitle dark:text-[#fff]">80+ Projects</span>
        </div>
        <div className="about-box dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
            <BsHeadset className="about-icon dark:text-[#fff]"/>
            <h3 className="about-title dark:text-[#fff]">Support</h3>
            <span className="about-subtitle dark:text-[#fff]">18 Hours a day</span>
        </div>
    </div>
  )
}

export default Info