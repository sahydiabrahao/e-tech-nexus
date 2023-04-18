import techAccessoriesImage from '@/presentation/assets/tech-accessories-image.png'
import techConsultationImage from '@/presentation/assets/tech-consultation-image.png'
import salesOfEletronicsImage from '@/presentation/assets/sales-of-eletronics-image.png'
import Styles from './benefits-styles.scss'
import React from 'react'

const Benefits: React.FC = () => {
  return (
    <>
      <section className={Styles.benefits}>
        <div>
          <h1>
          Experience the Benefits of <br></br><span> Innovation!</span>
          </h1>
        </div>

        <div className={Styles.benefitsRow}>
          <img className={Styles.image} src={techAccessoriesImage} />

          <div className={Styles.title}>
            <h1>
              Tech <span> Accessories</span>
            </h1>
            <h6>
              Complete your tech setup with our wide range of top-quality tech accessories at E-Tech Nexus! From smartphones and tablets, to ergonomic keyboards and mice for your laptops and desktops.
            </h6>
          </div>
        </div>

        <div className={Styles.benefitsRow}>

          <div className={Styles.title}>
            <h1>
              Tech<span> Consultation</span>
            </h1>
            <h6>
              We also provide expert tech consultation services to help you make the most informed decisions for your specific needs. Our team of tech-savvy professionals are ready to assist you.
            </h6>
          </div>

          <img className={Styles.image} src={techConsultationImage} />
        </div>

        <div className={Styles.benefitsRow}>
          <img className={Styles.image} src={salesOfEletronicsImage} />

          <div className={Styles.title}>
            <h1>
              Sales of<span> Eletronics</span>
            </h1>
            <h6>
              Our store is stocked with the latest models from renowned brands, offering the best features, performance, and reliability.
            </h6>
          </div>
        </div>

      </section>
    </>
  )
}

export default Benefits
