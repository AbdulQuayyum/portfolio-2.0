import React from 'react'
import { BsGithub, BsTwitter,BsLinkedin, BsInstagram } from "react-icons/bs"

const Social = () => {
    return (
        <div className="home-social">
            <a href="https://github.com/AbdulQuayyum" target="_blank" rel="noreferrer"  className="home-social-icon dark:hover:text-gray-800 dark:text-gray-200">
                <BsGithub />
            </a>
            <a href="https://twitter.com/TheAbdulQuayyum" target="_blank" rel="noreferrer"  className="home-social-icon dark:hover:text-gray-800 dark:text-gray-200">
                <BsTwitter />
            </a>
            <a href="https://www.linkedin.com/in/alao-abdul-quayyum-982492218/" target="_blank" rel="noreferrer" className="home-social-icon dark:hover:text-gray-800 dark:text-gray-200">
                <BsLinkedin />
            </a>
            <a href="https://www.instagram.com/theabdulquayyum/" target="_blank" rel="noreferrer"  className="home-social-icon dark:hover:text-gray-800 dark:text-gray-200">
                <BsInstagram />
            </a>
        </div>
    )
}

export default Social