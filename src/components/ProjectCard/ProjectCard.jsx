import React from 'react'
import './style.css'

const ProjectCard = ({ className, src, title, description, link, href }) => (
  <>
    <section className="work-body">
      <div className={className}>
        <a href={href} target="_blank">
          <img className="work-cardImage" src={src} alt="alternate" />
        </a>
        <div className="work-textContainer">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>
          <p className="project-link">{link}</p>
        </div>
      </div>
    </section>
  </>
)

export default ProjectCard
