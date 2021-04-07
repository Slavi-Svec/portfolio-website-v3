import React from 'react'
import Image from '../../components/Image/Image'
import Text from '../../components/Text/Text'
import heroImage from '../../images/city-hero-image.jpg'
import AvatarLogo from '../../images/AvatarLogo-1.png'
import AvatarLogoTwo from '../../images/AvatarLogo2.png'
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
        <Text
          text="Hi, Im slavi"
          variant="h3"
          className="about-paragraph-title"
        />
        <Text
          className="about-bio"
          text="I'm a web developer based in Sydney, Australia.
              Lover of all things Javascript, focusing on front end development."
          variant="p"
        />
        <section className="about-Work-details"></section>
        <Text text="What i can do" variant="h3" className="about-paragraph" />
        <Text
          text="I enjoy turning difficult problems into simple and intuitive solutions,
                            creating interesting and beautiful interfaces across web and mobile applications."
          className="about-info"
          variant="p"
        />
        <Text
          text=" My main focus is mobile-friendly responsive websites in ReactJS, SASS and JSX
                     but  I'm always willing and eager to learn new skills and technologies for coding
                            stunning webpages. "
          className="about-info"
          variant="p"
        />
        <Image className="about-description-logo" src={AvatarLogoTwo} />
        <Text
          text="And when I'm not coding..."
          variant="h3"
          className="about-paragraph-title"
        />
        <Text
          text="Always ready for an adventure traveling to many different types of destinations.
                               I Enjoy writing, fitness, drawing and blogging. To add to this, I'm also into cryptocurrency."
          className="about-info"
          variant="p"
        />
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

export default About
