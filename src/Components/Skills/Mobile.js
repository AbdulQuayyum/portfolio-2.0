import React from 'react'
import { SiDart, SiFlutter, SiReact, SiKotlin } from "react-icons/si"

const Mobile = () => {
    return (
        <div className='skills-content dark:bg-transparent dark:border-[#fff] dark:border-[1px]'>
            <h3 className="skills-title dark:text-[#fff]">Mobile Engineer</h3>
            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <SiReact className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">React Native</h3>
                            <div className="progress-parent">
                                <div id="native" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                <span className="skills-level dark:text-[#fff]">Intermediate</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiFlutter className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Flutter</h3>
                            <div className="progress-parent">
                                <div id="flutter" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiDart className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Dart</h3>
                            <div className="progress-parent">
                                <div id="dart" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiKotlin className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Kotlin</h3>
                            <div className="progress-parent">
                                <div id="kotlin" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile