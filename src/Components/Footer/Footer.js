import React from 'react'
import { logo } from '../../Assets/Index'
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs"
const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className='footer dark:border-t-[1px] dark:border-[#fff]'>
            <div className="footer-container main-container">
                <h1 className="footer-title">
                
                <img src={logo} className="h-24" alt="..." />
                </h1>
                <ul className="footer-list">
                    <li>
                        <a href="/" className="footer-link dark:text-[#fff]">About</a>
                    </li>
                    <li>
                        <a href="/" className="footer-link dark:text-[#fff]">Projects</a>
                    </li>
                    <li>
                        <a href="/" className="footer-link dark:text-[#fff]">Testimonials</a>
                    </li>
                </ul>
                <div className="footer-social">
                    <a href="https://github.com/AbdulQuayyum" className="home-social-icon dark:text-[#fff]">
                        <BsGithub />
                    </a>
                    <a href="https://twitter.com/_AbdulQuayyum" className="home-social-icon dark:text-[#fff]">
                        <BsTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/alao-abdul-quayyum-982492218/" className="home-social-icon dark:text-[#fff]">
                        <BsLinkedin />
                    </a>
                    <a href="https://www.instagram.com/_abdulquayyum/" className="home-social-icon dark:text-[#fff]">
                        <BsInstagram />
                    </a>
                </div>
                <span className="footer-copy dark:text-[#fff]">{currentYear} &#169; Abdul-Quayyum Alao, All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer