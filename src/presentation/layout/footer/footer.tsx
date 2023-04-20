import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import nexusLogo from '@/presentation/assets/e-tech-nexus-logo.png'
import Styles from './footer-styles.scss'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <section className={Styles.footer}>
        <div className={Styles.reference}>
            <h6>Images created by
              <a href="https://www.freepik.com/author/stories">@storyset</a>
            </h6>.
        </div>

        <svg className={Styles.waveTop} width="1920" height="160" viewBox="0 0 1920 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 53.3333L106.667 62.2222C213.333 71.1111 426.667 88.8889 640 82.9444C853.333 77.2222 1066.67 47.2222 1280 56.2778C1493.33 65 1706.67 112.778 1813.33 136.278L1920 160V0H1813.33C1706.67 0 1493.33 0 1280 0C1066.67 0 853.333 0 640 0C426.667 0 213.333 0 106.667 0H0V53.3333Z" fill="#7FF2E5"/>
        </svg>

        <div className={Styles.footerColumn}>
          <h5>About</h5>
          <h6>Our goal is to provide the latest and greatest technology at competitive prices.</h6>
          <img className={Styles.image} src={nexusLogo} />
        </div>

        <div className={Styles.footerColumn}>
          <h5>Connect With Us</h5>
          <div className={Styles.footerRow}>
            <FaFacebookF className={Styles.footerIcon} />
            <h6>Facebook: @etechnexus</h6>
          </div>
          <div className={Styles.footerRow}>
            <FaInstagram className={Styles.footerIcon} />
            <h6>Instagram: @etechnexus</h6>
          </div>
          <div className={Styles.footerRow}>
            <FaTiktok className={Styles.footerIcon} />
            <h6>TikTok: @etechnexus</h6>
          </div>
        </div>

        <div className={Styles.footerColumn}>
          <h5>Contact Us</h5>
          <h6>Phone: (555) 123-4567 </h6>
          <h6>Email: info@etechnexus.com  </h6>
          <h6>Address: 1234 Main St, Anytown USA </h6>
        </div>

      </section>

    </>
  )
}

export default Footer
