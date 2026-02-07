import { SectionLabel, SectionHeading } from '../../ui'
import { Button } from '../../ui'
import { IMAGES, siteConfig } from '../../../data'
import styles from './CtaBlock.module.css'

export function CtaBlock() {
  return (
    <section className={`section ${styles.ctaBlock}`} id="contact">
      <div className={styles.wrapper}>
        <div className={styles.imageWrap}>
          <img
            src={IMAGES.heroChefPlating}
            alt="Private chef cooking experience"
            className={styles.image}
          />
          <div className={`${styles.overlay} overlay-strong`} />
        </div>
        <div className={styles.content}>
          <SectionLabel>Let&apos;s Create Together</SectionLabel>
          <SectionHeading as="h2">
            Ready to Create an
            <br />
            Unforgettable Event?
          </SectionHeading>
          <p className={styles.subtitle}>
            Let&apos;s discuss your vision. Your custom menu is one click away.
          </p>
          <Button
            asChild
            href={`mailto:${siteConfig.email}`}
            variant="primary"
            className={styles.btn}
          >
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  )
}
