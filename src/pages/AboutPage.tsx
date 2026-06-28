import { usePageTitle } from '../hooks/usePageTitle'
import { SectionLabel, SectionHeading } from '../components/ui'
import { aboutContent, IMAGES } from '../data'
import styles from './AboutPage.module.css'

export function AboutPage() {
  usePageTitle('About Us | Dine With Devang')

  return (
    <section className={`section ${styles.about}`}>
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
            <SectionLabel>About Us</SectionLabel>
            <SectionHeading as="h1">{aboutContent.title}</SectionHeading>
            <p className={styles.subtitle}>{aboutContent.subtitle}</p>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={styles.bio}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
