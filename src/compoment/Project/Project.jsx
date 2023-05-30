import Navbar from 'compoment/Navbar/Navbar'
import React from 'react'
import project from './Project.module.scss'
const Project = () => {
  return (
    <div>
      <div className={project.content}>
        <Navbar />
        <h2> пока проектов нету</h2>
      </div>
    </div>
  )
}

export default Project
