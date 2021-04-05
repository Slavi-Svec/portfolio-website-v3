import React from 'react'
import Image from '../../components/Image/Image'
import Text from '../../components/Text/Text'
import heroImage from '../../images/city-hero-image.jpg'
import AvatarLogo from '../../images/AvatarLogo-1.png'
import './styles.css'

const About = () => {
  return (
    <>
      <section className="hero-container">
        <Text text="Im Slavi" className="about-title" variant="h2" />
        <Text
          text="a Web developer."
          className="about-profession"
          variant="h3"
        />
        <Image className="hero-image" src={heroImage} />
      </section>
      <section className="about-description">
        <Image className="about-description-logo" src={AvatarLogo} />
      </section>
    </>
  )
}

export default About
