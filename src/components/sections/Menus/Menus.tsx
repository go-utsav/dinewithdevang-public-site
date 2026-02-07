import { SectionLabel, SectionHeading, Button } from '../../ui'
import { menus, siteConfig } from '../../../data'
import styles from './Menus.module.css'

export function Menus() {
  return (
    <section className={`section ${styles.menus}`} id="menus">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>Our Menus</SectionLabel>
          <SectionHeading as="h2">Our Culinary Passions</SectionHeading>
          <p className={styles.subtitle}>
            Each menu is crafted with passion, using the finest ingredients and time-honored
            techniques.
          </p>
        </div>
        <div className={styles.grid}>
          {menus.map((menu) => (
            <article key={menu.id} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <img src={menu.image} alt={menu.alt} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.tag}>{menu.tag}</p>
                <h3 className={styles.title}>{menu.title}</h3>
                <p className={styles.desc}>{menu.description}</p>
                <Button variant="outline" asChild href={`mailto:${siteConfig.email}?subject=Menu: ${menu.title}`}>
                  View Menu
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
