import { SectionLabel, SectionHeading } from '../../ui'
import { IMAGES } from '../../../data'
import styles from './MeetChef.module.css'

export function MeetChef() {
  return (
    <section className={`section ${styles.meetChef}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src={IMAGES.chefDevangShah}
              alt="Chef Devang Shah - Founder of Dine With Devang"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <SectionLabel>Meet Your Chef</SectionLabel>
            <SectionHeading as="h2" className={styles.name}>
              Devang Shah
            </SectionHeading>
            <p className={styles.bio}>
              With over 15 years of culinary expertise, Chef Devang Shah brings the authentic
              flavours of India and international cuisine directly to your table. His passion for
              perfection and dedication to creating memorable dining experiences has made Dine With
              Devang London&apos;s premier private chef service.
            </p>
            <p className={styles.bio}>
              From intimate dinner parties to grand celebrations, Devang crafts every dish with
              love, precision, and the finest ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
