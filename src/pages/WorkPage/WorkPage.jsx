import React from 'react'
// import Navigation from '../../Components/Navigation/Navigation'
import Image from '../../components/Image/Image'
import Text from '../../components/Text/Text'
// import Footer from '../../Components/Footer/Footer'
import AvatarLogo3 from '../../images/AvatarLogo3.png'
import laptopTemplate from '../../images/laptop-template.png'
import './styles.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const WorkPage = () => {
  return (
    <>
      <section className="work-section">
        <section className="work-description" id="work__container">
          <Text text="Projects" className="work-title" variant="h2" />
        </section>
      </section>
      <section className="work-description">
        <Image className="work-logo" src={AvatarLogo3} />
        <section>
          <ProjectCard
            className="project-card-variant-one"
            src={laptopTemplate}
            title="AA Newtown Website"
            description="A simple weather app that displays the current weather and 5 day forecast. Using React and
                     SASS. The updated datais are accessed from open weather maps api"
          />
        </section>
      </section>
    </>
  )
}

export default WorkPage
