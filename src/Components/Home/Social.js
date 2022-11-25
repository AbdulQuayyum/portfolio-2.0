import React from 'react'
import { BsGithub, BsTwitter,BsLinkedin, BsInstagram } from "react-icons/bs"

const Social = () => {
    return (
        <div className="home-social">
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
    )
}

export default Social