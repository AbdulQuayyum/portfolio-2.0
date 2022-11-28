import React from 'react'
import { SiMongodb, SiPhp, SiNodedotjs,SiExpress, SiDjango, SiMysql, SiFirebase, SiSupabase } from "react-icons/si"

const Backend = () => {
  return (
    <div className='skills-content'>
        <h3 className="skills-title">Backend Engineer</h3>
        <div className="skills-box">
            <div className="skills-group">
                <div className="skills-data">
                    <SiPhp className='skills-icon' />
                    <div>
                        <h3 className="skills-name">PHP</h3>
                        <span className="skills-level">Basic</span>
                    </div>
                </div>
                <div className="skills-data">
                    <SiNodedotjs className='skills-icon' />
                    <div>
                        <h3 className="skills-name">Node.Js</h3>
                        <span className="skills-level">Basic</span>
                    </div>
                </div>
                <div className="skills-data">
                    <SiExpress className='skills-icon' />
                    <div>
                        <h3 className="skills-name">Express.Js</h3>
                        <span className="skills-level">Basic</span>
                    </div>
                </div>
                <div className="skills-data">
                    <SiDjango className='skills-icon' />
                    <div>
                        <h3 className="skills-name">Django</h3>
                        <span className="skills-level">Basic</span>
                    </div>
                </div>
            </div>
            <div className="skills-group">
                <div className="skills-data">
                    <SiFirebase className='skills-icon' />
                    <div>
                        <h3 className="skills-name">Firebase</h3>
                        <span className="skills-level">Basic</span>
                    </div>
                </div>
                <div className="skills-data">
                    <SiSupabase className='skills-icon' />
                    <div>
                        <h3 className="skills-name">Supabase</h3>
                        <span className="skills-level">Basic</span>
                    </div>
                </div>
                <div className="skills-data">
                    <SiMysql className='skills-icon' />
                    <div>
                        <h3 className="skills-name">MySQL</h3>
                        <span className="skills-level">Basic</span>
                    </div>
                </div>
                <div className="skills-data">
                    <SiMongodb className='skills-icon' />
                    <div>
                        <h3 className="skills-name">Mongo DB</h3>
                        <span className="skills-level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend