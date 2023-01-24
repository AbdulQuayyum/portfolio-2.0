import React from 'react'
import { SiMongodb, SiPhp, SiNodedotjs, SiExpress, SiDjango, SiMysql, SiFirebase, SiSupabase } from "react-icons/si"

const Backend = () => {
    return (
        <div className='skills-content dark:bg-transparent dark:border-[#fff] dark:border-[1px]'>
            <h3 className="skills-title dark:text-[#fff]">Backend Engineer</h3>
            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <SiPhp className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">PHP</h3>
                            <div className="progress-parent">
                                <div id="php" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiNodedotjs className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Node.Js</h3>
                            <div className="progress-parent">
                                <div id="node" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiExpress className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Express.Js</h3>
                            <div className="progress-parent">
                                <div id="express" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiDjango className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Django</h3>
                            <div className="progress-parent">
                                <div id="django" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-group">
                    <div className="skills-data">
                        <SiFirebase className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Firebase</h3>
                            <div className="progress-parent">
                                <div id="firebase" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiSupabase className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Supabase</h3>
                            <div className="progress-parent">
                                <div id="supabase" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiMysql className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">MySQL</h3>
                            <div className="progress-parent">
                                <div id="mysql" data-tooltip-content="Basic" className="progress-bar-basic"></div>
                                <span className="skills-level dark:text-[#fff]">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills-data">
                        <SiMongodb className='skills-icon' />
                        <div>
                            <h3 className="skills-name dark:text-[#fff]">Mongo DB</h3>
                            <div className="progress-parent">
                                <div id="mongo" data-tooltip-content="Intermediate" className="progress-bar-intermediate"></div>
                                <span className="skills-level dark:text-[#fff]">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend