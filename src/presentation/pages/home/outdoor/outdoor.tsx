import Styles from './outdoor-styles.scss'
import React from 'react'

const Outdoor: React.FC = () => {
  return (
    <>
      <section className={Styles.outdoor}>

        <div className={Styles.title}>
          <h1>
          Experience the E-Tech Nexus<span> Consultation Advantage</span>
          </h1>
          <button>Start Now</button>
        </div>

      </section>
    </>
  )
}

export default Outdoor
