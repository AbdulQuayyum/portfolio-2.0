import React, { useState } from 'react'
import { TbHome, TbBriefcase, TbCode } from "react-icons/tb"
import { FaRegUser } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { GrSend } from "react-icons/gr"
import { MdSegment } from "react-icons/md"
import { CgFileDocument } from "react-icons/cg"
import abdulquayyum from "../../Assets/Images/abdulquayyum.png"

// import { Link } from "react-router-dom";

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    const [Toggle, ShowMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#Home")
    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav-logo">
                    <img src={abdulquayyum} alt="..." />
                </a>
                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="#Home" onClick={() => setActiveNav("#Home")} className={activeNav === "#Home" ? "nav-link active-link" : "nav-link"}>
                                <TbHome className='nav-icon' />
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#About" onClick={() => setActiveNav("#About")} className={activeNav === "#About" ? "nav-link active-link" : "nav-link"}>
                                <FaRegUser className='nav-icon' />
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Skills" onClick={() => setActiveNav("#Skills")} className={activeNav === "#Skills" ? "nav-link active-link" : "nav-link"}>
                                <TbCode className='nav-icon' />
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Services" onClick={() => setActiveNav("#Services")} className={activeNav === "#Services" ? "nav-link active-link" : "nav-link"}>
                                <TbBriefcase className='nav-icon' />
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Portfolio" onClick={() => setActiveNav("#Portfolio")} className={activeNav === "#Portfolio" ? "nav-link active-link" : "nav-link"}>
                                <CgFileDocument className='nav-icon' />
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Contact" onClick={() => setActiveNav("#Contact")} className={activeNav === "#Contact" ? "nav-link active-link" : "nav-link"}>
                                <GrSend className='nav-icon' />
                                Contact
                            </a>
                        </li>
                    </ul>
                    < IoClose className="nav-close" onClick={() => ShowMenu(!Toggle)} />
                </div>
                <div className="nav-toggle" onClick={() => ShowMenu(!Toggle)}>
                    < MdSegment />
                </div>
            </nav>
        </header>
    )
}

export default Header