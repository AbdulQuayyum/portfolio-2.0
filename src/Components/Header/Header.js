import React, { useState } from 'react'
import { TbHome, TbBriefcase, TbCode } from "react-icons/tb"
import { FaRegUser } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { GrSend } from "react-icons/gr"
import { MdSegment } from "react-icons/md"
import { CgFileDocument } from "react-icons/cg"
// import { Link } from "react-router-dom";

const Header = () => {
    const [Toggle, ShowMenu] = useState(false)
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">
                    Abdul-Quayyum
                </a>
                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}> 
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="#Home" className="nav-link active-link">
                                <TbHome className='nav-icon' />
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#About" className="nav-link">
                                <FaRegUser className='nav-icon' />
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Skills" className="nav-link">
                                <TbCode className='nav-icon' />
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Services" className="nav-link">
                                <TbBriefcase className='nav-icon' />
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Portfolio" className="nav-link">
                                <CgFileDocument className='nav-icon' />
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#Contact" className="nav-link">
                                <GrSend className='nav-icon' />
                                Contact
                            </a>
                        </li>
                    </ul>
                    < IoClose className="nav-close" onClick={() => ShowMenu(!Toggle)}/>
                </div>
                <div className="nav-toggle" onClick={() => ShowMenu(!Toggle)}>
                    < MdSegment />
                </div>
            </nav>
        </header>
    )
} 

export default Header