import React from 'react'
import { GrGithub } from "react-icons/gr"
import { IoEarthOutline } from "react-icons/io5"

const ProjectItems = ({ item }) => {
  return (
    <div className="project-card dark:bg-transparent dark:border-[#fff] dark:border-[1px]" key={item.id}>
      <img src={item.image} alt="..." className='project-img' />
      <h3 className="project-title dark:text-[#fff]">{item.name}</h3>
      <span className="project-decription dark:text-gray-400">{item.description}</span>
      <div className="project-tech dark:text-[#fff]">
        <span>{item.tech}</span>
      </div>
      <div className="project-icons-div">
        <a href={item.githubUrl} className="project-icons">
          <IoEarthOutline className='project-icon dark:text-gray-50' />
          <span className='dark:text-gray-200'>Live Preview</span>
        </a>
        <a href={item.project} className="project-icons">
          <GrGithub className='project-icon dark:text-gray-50' />
          <span className='dark:text-gray-200'>Source Code</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectItems