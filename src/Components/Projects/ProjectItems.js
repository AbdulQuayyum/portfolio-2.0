import React from 'react'
import { GrGithub } from "react-icons/gr"
import { IoEarthOutline } from "react-icons/io5"

const ProjectItems = ({ item }) => {
  return (
    <div className="project-card" key={item.id}>
      <img src={item.image} alt="..." className='project-img' />
      <h3 className="project-title">{item.name}</h3>
      <span className="project-decription">{item.description}</span>
      <div className="project-tech">
        <span>{item.tech}</span>
      </div>
      <div className="project-icons-div">
        <a href={item.githubUrl} className="project-icons">
          <IoEarthOutline className='project-icon' />
          <span>Live Preview</span>
        </a>
        <a href={item.project} className="project-icons">
          <GrGithub className='project-icon' />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectItems