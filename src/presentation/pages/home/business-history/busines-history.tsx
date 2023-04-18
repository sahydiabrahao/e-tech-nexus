import logoImage from '@/presentation/assets/e-tech-nexus-image.png'
import Styles from './busines-history-styles.scss'
import React from 'react'

const BusinesHistory: React.FC = () => {
  return (
    <>
      <section className={Styles.businesHistory}>

        <img className={Styles.image} src={logoImage} />

        <div className={Styles.title}>
          <h4>
            E-Tech Nexus is a market leader in the world of electronics, with decades of experience.
          </h4>
          <h6>
          Our team of seasoned experts has a deep understanding of the ever-evolving tech landscape, and we leverage our expertise to provide our customers with the latest and greatest in tech products and services.
          </h6>
        </div>

      </section>
    </>
  )
}

export default BusinesHistory
