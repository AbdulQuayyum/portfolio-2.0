import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import Mobile from './Mobile'

const Skills = () => {
    return (
        <section className="skills main-section" id="Skills">
            <h2 className="section-title dark:text-[#fff]">
                Skills
            </h2>
            <span className="section-subtitle dark:text-gray-400">
                Why choose Abdul-Quayyum?
            </span>
            <div className="skills-container main-container main-grid">
                <Frontend />
                <Backend />
                <Mobile />
            </div>
        </section>
    )
}

export default Skills