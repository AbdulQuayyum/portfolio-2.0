import React from 'react'
import { SiC, SiCplusplus, SiJava, SiPython, SiJavascript, SiDart, SiSolidity, SiTypescript } from "react-icons/si"

const Other = () => {
    return (
        <div className='skills-content dark:bg-transparent dark:border-[#fff] dark:border-[1px]'>
            <h3 className="skills-title dark:text-[#fff]">Software Engineer</h3>
            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <SiC className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">C</h3>
                            <div className="progress-parent">
                                <div id="native" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiCplusplus className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">C++</h3>
                            <div className="progress-parent">
                                <div id="flutter" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiJava className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Java</h3>
                            <div className="progress-parent">
                                <div id="dart" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiPython className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Python</h3>
                            <div className="progress-parent">
                                <div id="kotlin" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-group">
                    <div className="skills-data">
                        <SiJavascript className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Javascript</h3>
                            <div className="progress-parent">
                                <div id="js" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                <span className="skills-level dark:text-[#fff]">Intermediate</span>
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
                        <SiSolidity className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Solidity</h3>
                            <div className="progress-parent">
                                <div id="dart" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiSolidity className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Solidity</h3>
                            <div className="progress-parent">
                                <div id="dart" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                        <div className="skills-data">
                            <SiTypescript className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">Typescript </h3>
                                <div className="progress-parent">
                                    <div id="ts" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                    <span className="skills-level dark:text-[#fff]">Basic</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Other