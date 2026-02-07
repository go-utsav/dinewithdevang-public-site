import { SectionLabel, SectionHeading } from '../../ui'
import { IMAGES } from '../../../data'
import styles from './Venues.module.css'

const VENUES = ['East India Club', 'Salters Hall', 'The Savile Club']

export function Venues() {
  return (
    <section className={`section ${styles.venues}`}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrap}>
          <img
            src={IMAGES.venuePrestigious}
            alt="Grand historic London venue interior"
            className={styles.image}
          />
          <div className={`${styles.overlay} overlay-strong`} />
        </div>
        <div className={styles.content}>
          <SectionLabel>Venues</SectionLabel>
          <SectionHeading as="h2">
            Proudly Serving
            <br />
            London&apos;s Finest Venues.
          </SectionHeading>
          <div className={styles.venueList}>
            {VENUES.map((v, i) => (
              <span key={v} className={styles.venueItem}>
                {i > 0 && <span className={styles.dot}> • </span>}
                {v}
              </span>
            ))}
          </div>
          <p className={styles.and}>...And Your Private Residence.</p>
        </div>
      </div>
    </section>
  )
}
