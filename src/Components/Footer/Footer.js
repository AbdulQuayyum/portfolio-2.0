import React from 'react'
import abdulquayyum from "../../Assets/Images/abdulquayyum.png"
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs"
const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container container">
                <h1 className="footer-title">
                
                <img src={abdulquayyum} alt="..." />
                </h1>
                <ul className="footer-list">
                    <li>
                        <a href="/" className="footer-link">About</a>
                    </li>
                    <li>
                        <a href="/" className="footer-link">Projects</a>
                    </li>
                    <li>
                        <a href="/" className="footer-link">Testimonials</a>
                    </li>
                </ul>
                <div className="footer-social">
                    <a href="https://github.com/AbdulQuayyum" className="home-social-icon">
                        <BsGithub />
                    </a>
                    <a href="https://twitter.com/_AbdulQuayyum" className="home-social-icon">
                        <BsTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/alao-abdul-quayyum-982492218/" className="home-social-icon">
                        <BsLinkedin />
                    </a>
                    <a href="https://www.instagram.com/_abdulquayyum/" className="home-social-icon">
                        <BsInstagram />
                    </a>
                </div>
                <span className="footer-copy">{currentYear} &#169; Abdul-Quayyum Alao, All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer