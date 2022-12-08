import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import Mobile from './Mobile'

const Skills = () => {
    return (
        <section className="skills section" id="Skills">
            <h2 className="section-title">
                Skills
            </h2>
            <span className="section-subtitle">
                Why choose Abdul-Quayyum?
            </span>
            <div className="skills-container container grid">
                <Frontend />
                <Backend />
                <Mobile />
            </div>
        </section>
    )
}

export default Skills