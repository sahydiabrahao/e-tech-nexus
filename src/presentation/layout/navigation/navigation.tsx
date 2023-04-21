import nexusLogo from '@/presentation/assets/e-tech-nexus-logo.png'
import Styles from './navigation-styles.scss'
import React, { useState } from 'react'
import { FaBars, FaPlus } from 'react-icons/fa'

const Navigation: React.FC = () => {
  const [showMenuPhone, setShowMenuPhone] = useState(false)

  const onMenuPhone = (): any => {
    setShowMenuPhone(true)
    document.body.style.position = 'fixed'
  }

  const onCloseMenuPhone = (): any => {
    setShowMenuPhone(false)
    document.body.style.position = ''
  }

  const MenuPhone = (): any => {
    return (
    <div className={Styles.menuPhone} >
    <a href="#hero" onClick={onCloseMenuPhone}>Home</a>
    <a href="#services" onClick={onCloseMenuPhone}>Services</a>
    <a href="#about" onClick={onCloseMenuPhone}>About</a>
    <a href="#benefits" onClick={onCloseMenuPhone}>Benefits</a>
    <a href="#shop" onClick={onCloseMenuPhone}>Shop</a>

    <FaPlus className={Styles.closeIcon} onClick={onCloseMenuPhone} />
  </div>)
  }

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
        <button className={Styles.signin}>Sign In</button>
        <FaBars className={Styles.menuPhoneIcon} onClick={onMenuPhone} />

        { showMenuPhone ? <MenuPhone /> : null }
      </div>
    </>
  )
}

export default Navigation
