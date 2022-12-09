import React from 'react'
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiThreedotjs, SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiBootstrap, SiJquery } from "react-icons/si"

const Frontend = () => {
    return (
        <div>
            <div className='skills-content dark:bg-transparent dark:border-[#fff] dark:border-[1px]'>
                <h3 className="skills-title dark:text-[#fff]">Frontend Engineer</h3>
                <div className="skills-box">
                    <div className="skills-group">
                        <div className="skills-data">
                            <SiHtml5 className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">HTML </h3>
                                <div className="progress-parent">
                                    <div id="html" data-tooltip-content="Advanced" className="progress-bar-advanced"></div>
                                    <span className="skills-level dark:text-[#fff]">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiCss3 className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">CSS</h3>
                                <div className="progress-parent">
                                    <div id="css" data-tooltip-content="Advanced" className="progress-bar-advanced"></div>
                                    <span className="skills-level dark:text-[#fff]">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiTailwindcss className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">Tailwind</h3>
                                <div className="progress-parent">
                                    <div id="taiilwind" data-tooltip-content="Advanced" className="progress-bar-advanced"></div>
                                    <span className="skills-level dark:text-[#fff]">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiBootstrap className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">Bootstrap</h3>
                                <div className="progress-parent">
                                    <div id="boostrap" data-tooltip-content="Advanced" className="progress-bar-advanced"></div>
                                    <span className="skills-level dark:text-[#fff]">Advanced</span>
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
                            <SiTypescript className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">Typescript </h3>
                                <div className="progress-parent">
                                    <div id="ts" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                    <span className="skills-level dark:text-[#fff]">Basic</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiJquery className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">Jquery</h3>
                                <div className="progress-parent">
                                    <div id="jquery" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                    <span className="skills-level dark:text-[#fff]">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiThreedotjs className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">Three.Js</h3>
                                <div className="progress-parent">
                                    <div id="threejs" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                    <span className="skills-level dark:text-[#fff]">Basic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-group">
                        <div className="skills-data">
                            <SiReact className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">React.Js</h3>
                                <div className="progress-parent">
                                    <div id="react" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                    <span className="skills-level dark:text-[#fff]">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiNextdotjs className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">Next.Js</h3>
                                <div className="progress-parent">
                                    <div id="next" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                    <span className="skills-level dark:text-[#fff]">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiVuedotjs className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">Vue.Js</h3>
                                <div className="progress-parent">
                                    <div id="vue" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                    <span className="skills-level dark:text-[#fff]">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiAngular className='skills-icon' />
                            <div>
                                <h3 className="skills-name dark:text-[#fff]">Angular.Js</h3>
                                <div className="progress-parent">
                                    <div id="angular" data-tooltip-content="Basic" className="progress-bar-intermediate"></div>
                                    <span className="skills-level dark:text-[#fff]">Basic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend