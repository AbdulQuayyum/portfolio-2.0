import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import ProjectItems from './ProjectItems'

const Projects = () => {
  const [item, setItem] = useState({ name: "All" })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name
      })
      setProjects(newProjects)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent })
    setActive(index)
  }

  return (
    <>
      <div className='project-filters'>
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index)
              }}
              className={`${active === index ? "active-project dark:border-[var(--body-color)] dark:border-b-2  dark:rounded-none" : ""} project-item dark:hover:text-[var(--title-dark)] dark:bg-transparent dark:text-[var(--body-color)]  `} key={index}>
              {item.name}
            </span>
          )
        })}
      </div>
      <div className="project-container main-container main-grid">
        {projects.map((item) => {
          return <ProjectItems item={item} key={item.id} />
        })}
      </div>
    </>
  )
}

export default Projects