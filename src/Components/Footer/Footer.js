import React from 'react'
import { motion } from "framer-motion";

import { FooterAnimation } from "../../Utilities/Motion/Motion";
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs"
const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <motion.footer
            variants={FooterAnimation}
            initial="hidden"
            whileInView="show"
            className='footer dark:border-t-[1px] dark:border-[#fff]'>
            <div className="footer-container main-container">
                <h1 className="footer-title">
                    Abdul-Quayyum Alao
                    {/* <img src={logo} className="h-24" alt="..." /> */}
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
                    <a href="https://github.com/AbdulQuayyum" target="_blank" rel="noreferrer" className="home-social-icon dark:text-[#fff]">
                        <BsGithub />
                    </a>
                    <a href="https://twitter.com/TheAbdulQuayyum" target="_blank" rel="noreferrer" className="home-social-icon dark:text-[#fff]">
                        <BsTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/alao-abdul-quayyum-982492218/" target="_blank" rel="noreferrer" className="home-social-icon dark:text-[#fff]">
                        <BsLinkedin />
                    </a>
                    <a href="https://www.instagram.com/theabdulquayyum/" target="_blank" rel="noreferrer" className="home-social-icon dark:text-[#fff]">
                        <BsInstagram />
                    </a>
                </div>
                <span className="footer-copy dark:text-[#fff]">{currentYear} &#169; Abdul-Quayyum Alao, All rights reserved</span>
            </div>
        </motion.footer>
    )
}

export default Footer