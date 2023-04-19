import techAccessoriesImage from '@/presentation/assets/tech-accessories.png'
import techConsultationImage from '@/presentation/assets/tech-consultation.png'
import salesOfEletronicsImage from '@/presentation/assets/sales-of-eletronics.png'
import Styles from './benefits-styles.scss'
import React, { useEffect, useState } from 'react'

const Benefits: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const [scrollAccessories, setScrollAccessories] = useState(false)
  const [scrollConsultation, setScrollConsultation] = useState(false)
  const [scrollSales, setScrollSales] = useState(false)

  useEffect(() => {
    const onScroll = (e): any => {
      setScrollTop(e.target.documentElement.scrollTop)
      if (e.target.documentElement.scrollTop > 1900) { setScrollAccessories(true) }
      if (e.target.documentElement.scrollTop > 2400) { setScrollConsultation(true) }
      if (e.target.documentElement.scrollTop > 3000) { setScrollSales(true) }
    }
    window.addEventListener('scroll', onScroll)

    return () => { window.removeEventListener('scroll', onScroll) }
  }, [scrollTop])

  return (
    <>
      <section className={Styles.benefits}>
        <div className={Styles.title}>
          <h1>
          Experience the Benefits of <br></br><span> Innovation!</span>
          </h1>
        </div>

        <div className={scrollAccessories ? Styles.showRight : Styles.benefitsSection}>
          <img className={Styles.image} src={techAccessoriesImage} />
          <div className={Styles.show}>
            <h1>
              Tech <span> Accessories</span>
            </h1>
            <h5>
              Complete your tech setup with our wide range of top-quality tech accessories at E-Tech Nexus! From smartphones and tablets, to ergonomic keyboards and mice for your laptops and desktops.
            </h5>
          </div>
        </div>

        <div className={scrollConsultation ? Styles.showLeft : Styles.benefitsSection}>
          <div >
            <h1>
              Tech<span> Consultation</span>
            </h1>
            <h5>
              We also provide expert tech consultation services to help you make the most informed decisions for your specific needs. Our team of tech-savvy professionals are ready to assist you.
            </h5>
          </div>
          <img className={Styles.image} src={techConsultationImage} />
        </div>

        <div className={scrollSales ? Styles.showRight : Styles.benefitsSection}>
          <img className={Styles.image} src={salesOfEletronicsImage} />
          <div>
            <h1>
              Sales of<span> Eletronics</span>
            </h1>
            <h5>
              Our store is stocked with the latest models from renowned brands, offering the best features, performance, and reliability.
            </h5>
          </div>
        </div>

      </section>
    </>
  )
}

export default Benefits
