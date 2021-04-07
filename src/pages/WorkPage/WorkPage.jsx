import React from 'react'
import Image from '../../components/Image/Image'
import Text from '../../components/Text/Text'
import AvatarLogo3 from '../../images/AvatarLogo3.png'
import laptopTemplate from '../../images/laptop-AAwebsite.png'
import './styles.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const WorkPage = () => {
  return (
    <>
      <section className="work-section">
        <section className="work-description">
          <Text text="Work" className="work-title" variant="h2" />
        </section>
      </section>
      <section className="work-description">
        <Image className="work-logo" src={AvatarLogo3} />
        <section>
          <ProjectCard
            className="project-card-variant-one"
            src={laptopTemplate}
            href={'https://aanewtown.org/'}
            title="AA Newtown Website"
            description="A website made for Alcoholics Anonymous Newtown using create react app."
          />
        </section>
        <Text text="I can help." className="about-help" variant="h2" />
        <Text
          text="Want to work together? I’d love to hear from you."
          className="about-work-together"
          variant="h3"
        />
        <Text
          text="I’m happy to collaborate on projects so if you require help on some upcoming work, or just want to say hi, than get in touch."
          className="about-contacting"
          variant="p"
        />
      </section>
    </>
  )
}

export default WorkPage
