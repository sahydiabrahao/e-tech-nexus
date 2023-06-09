import heroImage from '@/presentation/assets/hero-image.png'
import Styles from './hero-styles.scss'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <>
      <section id='hero' className={Styles.hero}>
        <svg className={Styles.waveBottom} width="1920" height="160" viewBox="0 0 1920 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1920 106.667L1813.33 97.7778C1706.67 88.8889 1493.33 71.1111 1280 77.0556C1066.67 82.7778 853.333 112.778 640 103.722C426.667 95 213.333 47.2222 106.667 23.7222L0 0V160H106.667C213.333 160 426.667 160 640 160C853.333 160 1066.67 160 1280 160C1493.33 160 1706.67 160 1813.33 160H1920V106.667Z" fill="#7FF2E5"/>
        </svg>

        <div className={Styles.title}>
          <h1>
            Unlocking Your Tech Potential<span> E-Tech Nexus</span>
          </h1>
          <h5>
            With our wide range of electronic products and expert tech consultation, we help you stay at the forefront of innovation.
          </h5>
          <div>
            <a href="#shop">
              <button className={Styles.buttonFilled} >PRODUCTS</button>
            </a>
            <a href="#services">
              <button className={Styles.buttonFilledDark}>SERVICES</button>
            </a>
          </div>
        </div>
        <img className={Styles.image} src={heroImage} />
      </section>
    </>
  )
}

export default Hero
