import React from 'react'
import Projects from './Projects'

const Project = () => {
  return (
    <section className="project main-section" id="Projects">
      <h2 className="section-title dark:text-[#fff]">Projects</h2>
      <span className="section-subtitle dark:text-gray-400">Let's check out some of Abdul-Quayyum's projects</span>
      <Projects />
    </section>
  )
}

export default Project