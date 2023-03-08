import React, { useState } from 'react'
import { TbHome, TbBriefcase, TbCode, TbMessageCircle } from "react-icons/tb"
import { FaRegUser } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { MdSegment } from "react-icons/md"
import { CgFileDocument } from "react-icons/cg"
import Toggler from '../Theme/ThemeToggle'

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if (this?.scrollY >= 80) header?.classList?.add("scroll-header")
        else header?.classList?.remove("scroll-header")
    })

    const [Toggle, ShowMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#Home")
    return (
        <header className="main-header">
            <nav className="nav main-container">
                <a href="/" className="nav-logo dark:text-white">
                    {/* <img src={logo} alt="..." /> */}
                    Abdul-Quayyum
                </a>
                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    < IoClose className="nav-close dark:text-[#fff] dark:hover:text-gray-300" onClick={() => ShowMenu(!Toggle)} />
                    <ul className="nav-list main-grid">
                        <li className="nav-item">
                            <a href="#Home" onClick={() => setActiveNav("#Home")} className={activeNav === "#Home" ? "dark:text-[#fff] nav-link active-link dark:hover:text-gray-300" : "dark:text-[#fff] nav-link dark:hover:text-gray-300"}>
                                <TbHome className='nav-icon' />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#About" onClick={() => setActiveNav("#About")} className={activeNav === "#About" ? "dark:text-[#fff] nav-link active-link dark:hover:text-gray-300" : "dark:text-[#fff] nav-link dark:hover:text-gray-300"}>
                                <FaRegUser className='nav-icon' />
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Skills" onClick={() => setActiveNav("#Skills")} className={activeNav === "#Skills" ? "dark:text-[#fff] nav-link active-link dark:hover:text-gray-300" : "dark:text-[#fff] nav-link dark:hover:text-gray-300"}>
                                <TbCode className='nav-icon' />
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Services" onClick={() => setActiveNav("#Services")} className={activeNav === "#Services" ? "dark:text-[#fff] nav-link active-link dark:hover:text-gray-300" : "dark:text-[#fff] nav-link dark:hover:text-gray-300"}>
                                <TbBriefcase className='nav-icon' />
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Projects" onClick={() => setActiveNav("#Projects")} className={activeNav === "#Projects" ? "dark:text-[#fff] nav-link active-link dark:hover:text-gray-300" : "dark:text-[#fff] nav-link dark:hover:text-gray-300"}>
                                <CgFileDocument className='nav-icon' />
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Contact" onClick={() => setActiveNav("#Contact")} className={activeNav === "#Contact" ? "dark:text-[#fff] nav-link active-link dark:hover:text-gray-300" : "dark:text-[#fff] nav-link dark:hover:text-gray-300"}>
                                <TbMessageCircle className='nav-icon' />
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-x-4'>
                    <Toggler />
                    <div className="nav-toggle dark:text-[#fff]" onClick={() => ShowMenu(!Toggle)}>
                        < MdSegment />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header