import React, { useState } from 'react'
import { motion } from "framer-motion";

import { FadeInAnimation, StaggerContainer } from '../../Utilities/Motion/Motion';
import { TitleText, TypingText } from '../Index';
import { FaUserGraduate } from "react-icons/fa"
import { TbBriefcase } from "react-icons/tb"
import { BsCalendar3 } from "react-icons/bs"

const Qualification = () => {
    const [toggle, setToggle] = useState(1)

    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <div>
            <motion.section
                initial="hidden"
                variants={StaggerContainer}
                viewport={{ once: false, amount: 0.25 }}
                whileInView="show"
                className="qualification main-section">
                <TitleText
                    title="Qualifications"
                    textStyles="section-title dark:text-[#fff]" />
                <TypingText
                    title="Abdul-Quayyum's personel journey"
                    textStyles="section-subtitle dark:text-gray-400" />
                <motion.div
                    variants={FadeInAnimation('up', 'tween', 0.2, 1)}
                    className="qualification-container main-container">
                    <div className="qualification-tabs">
                        <div
                            className={toggle === 1 ? "qualification-button qualification-active dark:hover:text-gray-400 dark:text-[#fff] button-flex" : "qualification-button button-flex dark:hover:text-gray-400"}
                            onClick={() => toggleTab(1)}
                        >
                            < FaUserGraduate className="qualification-icon" />
                            Education
                        </div>
                        <div
                            className={toggle === 2 ? "qualification-button qualification-active dark:hover:text-gray-400 dark:text-[#fff] button-flex " : "qualification-button button-flex dark:hover:text-gray-400"}
                            onClick={() => toggleTab(2)}
                        >
                            < TbBriefcase className="qualification-icon" />
                            Experience
                        </div>
                    </div>
                    <div className="qualification-sections">
                        <div className={toggle === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
                            <div className="qualification-data">
                                <div>
                                    <h3 className="qualification-title dark:text-[#fff]">Software Engineer</h3>
                                    <span className="qualification-subtitle dark:text-[#fff]">Learning and practicing.</span>
                                    <div className=" dark:text-gray-400">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        Aug 2021 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification-rounder dark:bg-gray-50"></span>
                                    <span className="qualification-line dark:bg-gray-200"></span>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div></div>
                                <div>
                                    <span className="qualification-rounder dark:bg-gray-50"></span>
                                    <span className="qualification-line dark:bg-gray-200"></span>
                                </div>
                                <div>
                                    <h3 className="qualification-title dark:text-[#fff]">Bsc. Computer Science</h3>
                                    <span className="qualification-subtitle dark:text-[#fff]">University of ilorin</span>
                                    <div className=" dark:text-gray-400">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        June 2021 - Present
                                    </div>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div>
                                    <h3 className="qualification-title dark:text-[#fff]">Web Development</h3>
                                    <span className="qualification-subtitle dark:text-[#fff]">Learning and practicing.</span>
                                    <div className=" dark:text-gray-400">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        Dec 2020 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification-rounder dark:bg-gray-50"></span>
                                    <span className="qualification-line dark:bg-gray-200"></span>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div></div>
                                <div>
                                    <span className="qualification-rounder dark:bg-gray-50"></span>
                                    <span className="qualification-line dark:bg-gray-200"></span>
                                </div>
                                <div>
                                    <h3 className="qualification-title dark:text-[#fff]">Secondary school</h3>
                                    <span className="qualification-subtitle dark:text-[#fff]">ISL & ADGS</span>
                                    <div className=" dark:text-gray-400">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        2014 - 2020
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={toggle === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
                            <div className="qualification-data">
                                <div></div>
                                <div>
                                    <span className="qualification-rounder dark:bg-gray-50"></span>
                                    <span className="qualification-line dark:bg-gray-200"></span>
                                </div>
                                <div>
                                    <h3 className="qualification-title dark:text-[#fff]">Software Engineer</h3>
                                    <span className="qualification-subtitle dark:text-[#fff]">D'Accubin - Internship</span>
                                    <div className=" dark:text-gray-400">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        May 2022 - December 2022
                                    </div>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div>
                                    <h3 className="qualification-title dark:text-[#fff]">Mobile Engineer</h3>
                                    <span className="qualification-subtitle dark:text-[#fff]">Freelance</span>
                                    <div className=" dark:text-gray-400">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        Feb 2022 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification-rounder dark:bg-gray-50"></span>
                                    <span className="qualification-line dark:bg-gray-200"></span>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div></div>
                                <div>
                                    <span className="qualification-rounder dark:bg-gray-50"></span>
                                    <span className="qualification-line dark:bg-gray-200"></span>
                                </div>
                                <div>
                                    <h3 className="qualification-title dark:text-[#fff]">Full-Stack Developer</h3>
                                    <span className="qualification-subtitle dark:text-[#fff]">Freelance</span>
                                    <div className=" dark:text-gray-400">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        Aug 2021 - Present
                                    </div>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div>
                                    <h3 className="qualification-title dark:text-[#fff]">Web Developer</h3>
                                    <span className="qualification-subtitle dark:text-[#fff]">Freelance</span>
                                    <div className=" dark:text-gray-400">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        Jan 2021 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification-rounder dark:bg-gray-50"></span>
                                    <span className="qualification-line dark:bg-gray-200"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        </div>
    )
}

export default Qualification