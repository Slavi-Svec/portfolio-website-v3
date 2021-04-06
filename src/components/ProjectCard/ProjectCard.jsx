import React from 'react'
import './style.css'

const ProjectCard = ({ className, src, title, description }) => (
  <>
    <section className="work-body">
      <div className={className}>
        <img className="work-cardImage" src={src} alt="alternate" />
        <div className="work-textContainer">
          <h1 className="project-title">{title}</h1>
          <p className=".project-description">{description}</p>
        </div>
      </div>
    </section>
  </>
)

export default ProjectCard
