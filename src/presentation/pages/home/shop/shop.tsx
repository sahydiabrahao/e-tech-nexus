import proGamingLaptopImage from '@/presentation/assets/pro-gaming-laptop.png'
import mouseProGamerXImage from '@/presentation/assets/mouse-pro-gamer-x.png'
import silentSenseKeyboardImage from '@/presentation/assets/silent-sense-keyboard.png'
import { FaCartPlus } from 'react-icons/fa'
import Styles from './shop-styles.scss'
import React from 'react'

const Shop: React.FC = () => {
  return (
    <>
      <section id='shop' className={Styles.shop}>
        <svg className={Styles.waveBottom} width="1920" height="160" viewBox="0 0 1920 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1920 106.667L1813.33 97.7778C1706.67 88.8889 1493.33 71.1111 1280 77.0556C1066.67 82.7778 853.333 112.778 640 103.722C426.667 95 213.333 47.2222 106.667 23.7222L0 0V160H106.667C213.333 160 426.667 160 640 160C853.333 160 1066.67 160 1280 160C1493.33 160 1706.67 160 1813.33 160H1920V106.667Z" fill="#7FF2E5"/>
        </svg>

        <div className={Styles.title}>
          <h1>
          Shop with<span> E-Tech Nexus!</span>
          </h1>
        </div>

        <div className={Styles.cards}>

          <div className={Styles.card}>
            <img className={Styles.image} src={proGamingLaptopImage} />
            <div>
              <h3>Pro Gaming Laptop</h3>
              <h6>Unleash your productivity with the sleek and powerful LuminaTech UltraBook.</h6>
            </div>
            <div className={Styles.cardMenu}>
              <FaCartPlus className={Styles.cardIcon} />
              <h6>$1,299.99</h6>
              <button>BUY</button>
            </div>
          </div>

          <div className={Styles.card}>
            <img className={Styles.image} src={mouseProGamerXImage} />
            <div>
              <h3>Pro Gaming Laptop</h3>
              <h6>Unleash your productivity with the sleek and powerful LuminaTech UltraBook.</h6>
            </div>
            <div className={Styles.cardMenu}>
              <FaCartPlus className={Styles.cardIcon} />
              <h6>$1,299.99</h6>
              <button>BUY</button>
            </div>
          </div>

          <div className={Styles.card}>
            <img className={Styles.image} src={silentSenseKeyboardImage} />
            <div>
              <h3>Pro Gaming Laptop</h3>
              <h6>Unleash your productivity with the sleek and powerful LuminaTech UltraBook.</h6>
            </div>
            <div className={Styles.cardMenu}>
              <FaCartPlus className={Styles.cardIcon} />
              <h6>$1,299.99</h6>
              <button>BUY</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Shop
