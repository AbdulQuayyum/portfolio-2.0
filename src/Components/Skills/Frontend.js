import React from 'react'
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiThreedotjs, SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiBootstrap, SiJquery } from "react-icons/si"

const Frontend = () => {
    return (
        <div>
            <div className='skills-content'>
                <h3 className="skills-title">Frontend Engineer</h3>
                <div className="skills-box">
                    <div className="skills-group">
                        <div className="skills-data">
                            <SiHtml5 className='skills-icon' />
                            <div>
                                <h3 className="skills-name">HTML </h3>
                                <div className="progress-parent">
                                    <div id="html" data-tooltip-content="Advanced" className="progress-bar-advanced"></div>
                                    <span className="skills-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiCss3 className='skills-icon' />
                            <div>
                                <h3 className="skills-name">CSS</h3>
                                <div className="progress-parent">
                                    <div id="css" data-tooltip-content="Advanced" className="progress-bar-advanced"></div>
                                    <span className="skills-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiTailwindcss className='skills-icon' />
                            <div>
                                <h3 className="skills-name">Tailwind</h3>
                                <div className="progress-parent">
                                    <div id="taiilwind" data-tooltip-content="Advanced" className="progress-bar-advanced"></div>
                                    <span className="skills-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiBootstrap className='skills-icon' />
                            <div>
                                <h3 className="skills-name">Bootstrap</h3>
                                <div className="progress-parent">
                                    <div id="boostrap" data-tooltip-content="Advanced" className="progress-bar-advanced"></div>
                                    <span className="skills-level">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-group">
                        <div className="skills-data">
                            <SiJavascript className='skills-icon' />
                            <div>
                                <h3 className="skills-name">Javascript</h3>
                                <div className="progress-parent">
                                    <div id="js" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                    <span className="skills-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiTypescript className='skills-icon' />
                            <div>
                                <h3 className="skills-name">Typescript </h3>
                                <div className="progress-parent">
                                    <div id="ts" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                    <span className="skills-level">Basic</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiJquery className='skills-icon' />
                            <div>
                                <h3 className="skills-name">Jquery</h3>
                                <div className="progress-parent">
                                    <div id="jquery" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                    <span className="skills-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiThreedotjs className='skills-icon' />
                            <div>
                                <h3 className="skills-name">Three.Js</h3>
                                <div className="progress-parent">
                                    <div id="threejs" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                    <span className="skills-level">Basic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-group">
                        <div className="skills-data">
                            <SiReact className='skills-icon' />
                            <div>
                                <h3 className="skills-name">React.Js</h3>
                                <div className="progress-parent">
                                    <div id="react" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                    <span className="skills-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiNextdotjs className='skills-icon' />
                            <div>
                                <h3 className="skills-name">Next.Js</h3>
                                <div className="progress-parent">
                                    <div id="next" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                    <span className="skills-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiVuedotjs className='skills-icon' />
                            <div>
                                <h3 className="skills-name">Vue.Js</h3>
                                <div className="progress-parent">
                                    <div id="vue" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                    <span className="skills-level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills-data">
                            <SiAngular className='skills-icon' />
                            <div>
                                <h3 className="skills-name">Angular.Js</h3>
                                <div className="progress-parent">
                                    <div id="angular" data-tooltip-content="Basic" className="progress-bar-intermediate"></div>
                                    <span className="skills-level">Basic</span>
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