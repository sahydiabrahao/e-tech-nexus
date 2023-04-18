import nexusLogo from '@/presentation/assets/e-tech-nexus-logo.png'
import Styles from './navigation-styles.scss'
import React from 'react'

const Navigation: React.FC = () => {
  return (
    <>
      <div className={Styles.navigation}>
        <img className={Styles.image} src={nexusLogo} />
        <div className={Styles.menu}>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Benefits</a>
          <a href="#">Shop</a>
        </div>
        <button>Sign In</button>
      </div>
    </>
  )
}

export default Navigation
