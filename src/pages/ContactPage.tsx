import { usePageTitle } from '../hooks/usePageTitle'
import { MailIcon, PhoneIcon } from '../assets/icons'
import { SectionLabel, SectionHeading, Button } from '../components/ui'
import { siteConfig } from '../data'
import styles from './ContactPage.module.css'

export function ContactPage() {
  usePageTitle('Contact Us | Dine With Devang')

  return (
    <section className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.content}>
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading as="h1">Contact us</SectionHeading>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <div className={styles.details}>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className={styles.link}>
              <PhoneIcon className={styles.icon} />
              <span>{siteConfig.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className={styles.link}>
              <MailIcon className={styles.icon} />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <Button asChild href={`mailto:${siteConfig.email}`} variant="primary">
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  )
}
