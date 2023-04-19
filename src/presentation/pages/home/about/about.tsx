import logoImage from '@/presentation/assets/e-tech-nexus-image.png'
import Styles from './about-styles.scss'
import React from 'react'

const About: React.FC = () => {
  return (
    <>
      <section id='about' className={Styles.businesHistory}>

        <img className={Styles.image} src={logoImage} />

        <div>
          <h2>
            E-Tech Nexus is a market leader in the world of electronics, with decades of experience.
          </h2>
          <h5>
            Our team of seasoned experts has a deep understanding of the ever-evolving tech landscape, and we leverage our expertise to provide our customers with the latest and greatest in tech products and services.
          </h5>
        </div>

      </section>
    </>
  )
}

export default About
