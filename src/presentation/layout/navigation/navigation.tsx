import nexusLogo from '@/presentation/assets/e-tech-nexus-logo.png'
import Styles from './navigation-styles.scss'
import React from 'react'

const Navigation: React.FC = () => {
  return (
    <>
      <div className={Styles.navigation}>
        <img className={Styles.image} src={nexusLogo} />
        <div className={Styles.menu}>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#benefits">Benefits</a>
          <a href="#shop">Shop</a>
        </div>
        <button>Sign In</button>
      </div>
    </>
  )
}

export default Navigation
