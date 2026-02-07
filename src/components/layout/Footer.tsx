import {
  MailIcon,
  PhoneIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
} from '../../assets/icons'
import { siteConfig } from '../../data'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>{siteConfig.brandName}</h3>
            <p className={styles.tagline}>{siteConfig.tagline}</p>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.heading}>Contact</h4>
            <a href={`mailto:${siteConfig.email}`} className={styles.link}>
              <MailIcon className={styles.icon} />
              <span>{siteConfig.email}</span>
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className={styles.link}>
              <PhoneIcon className={styles.icon} />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
          <div className={styles.social}>
            <h4 className={styles.heading}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
