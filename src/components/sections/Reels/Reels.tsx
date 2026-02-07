import { SectionLabel, SectionHeading } from '../../ui'
import { InstagramIcon } from '../../../assets/icons'
import { reels, siteConfig } from '../../../data'
import styles from './Reels.module.css'

export function Reels() {
  return (
    <section className={`section ${styles.reels}`}>
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>Follow Our Journey</SectionLabel>
          <SectionHeading as="h2">Behind The Scenes</SectionHeading>
          <p className={styles.subtitle}>
            Watch our culinary creations come to life on Instagram
          </p>
        </div>
        <div className={styles.scroll}>
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <img src={reel.image} alt={reel.alt} className={styles.image} />
                <div className={styles.views}>
                  <span className={styles.viewsText}>{reel.views}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          <InstagramIcon className={styles.ctaIcon} />
          Follow @DineWithDevang
        </a>
      </div>
    </section>
  )
}
