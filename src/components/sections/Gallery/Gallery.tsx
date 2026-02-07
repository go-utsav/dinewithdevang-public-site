import { SectionLabel, SectionHeading } from '../../ui'
import { InstagramIcon } from '../../../assets/icons'
import { galleryItems, siteConfig } from '../../../data'
import styles from './Gallery.module.css'

export function Gallery() {
  return (
    <section className={`section ${styles.gallery}`} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>Gallery</SectionLabel>
          <SectionHeading as="h2">Behind the Scenes</SectionHeading>
          <p className={styles.subtitle}>
            A glimpse into our culinary artistry and the memorable moments we create.
          </p>
        </div>
        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.alt} className={styles.image} />
            </div>
          ))}
        </div>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          <InstagramIcon className={styles.ctaIcon} />
          Follow the Journey @DineWithDevang
        </a>
      </div>
    </section>
  )
}
