import React, { useState } from 'react'
import { FaUserGraduate } from "react-icons/fa"
import { TbBriefcase } from "react-icons/tb"
import { BsCalendar3 } from "react-icons/bs"

const Qualification = () => {
    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <div>
            <section className="qualification section">
                <h2 className="section-title">Qualification</h2>
                <span className="section-subtitle">My personel journey</span>
                <div className="qualification-container container">
                    <div className="qualification-tabs">
                        <div
                            className={toggle === 1 ? "qualification-button qualification-active button-flex" : "qualification-button button-flex"}
                            onClick={() => toggleTab(1)}
                        >
                            < FaUserGraduate className="qualification-icon" />
                            Education
                        </div>
                        <div
                            className={toggle === 2 ? "qualification-button qualification-active button-flex" : "qualification-button button-flex"}
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
                                    <h3 className="qualification-title">Software Engineer</h3>
                                    <span className="qualification-subtitle">Learning and practicing.</span>
                                    <div className="qualification-calendar">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        Aug 2021 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div></div>
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification-title">Bsc. Computer Science</h3>
                                    <span className="qualification-subtitle">University of ilorin</span>
                                    <div className="qualification-calendar">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                     June 2021 - Present
                                    </div>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div>
                                    <h3 className="qualification-title">Web Development</h3>
                                    <span className="qualification-subtitle">Learning and practicing.</span>
                                    <div className="qualification-calendar">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                         Dec 2020 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div></div>
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification-title">Secondary school</h3>
                                    <span className="qualification-subtitle">ISL & ADGS</span>
                                    <div className="qualification-calendar">
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
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification-title">Software Engineer</h3>
                                    <span className="qualification-subtitle">D'Accubin - Internship</span>
                                    <div className="qualification-calendar">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        May 2022 - Present
                                    </div>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div>
                                    <h3 className="qualification-title">Mobile Engineer</h3>
                                    <span className="qualification-subtitle">Freelance</span>
                                    <div className="qualification-calendar">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        Feb 2022 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div></div>
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification-title">Full-Stack Developer</h3>
                                    <span className="qualification-subtitle">Freelance</span>
                                    <div className="qualification-calendar">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        Aug 2021 - Present
                                    </div>
                                </div>
                            </div>
                            <div className="qualification-data">
                                <div>
                                    <h3 className="qualification-title">Web Developer</h3>
                                    <span className="qualification-subtitle">Freelance</span>
                                    <div className="qualification-calendar">
                                        < BsCalendar3 style={{ marginRight: "5px" }} />
                                        Jan 2021 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification-rounder"></span>
                                    <span className="qualification-line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Qualification