import { Link } from 'react-router-dom'
import { SectionLabel, SectionHeading, Button } from '../../ui'
import { useMenuPdf } from '../../../hooks/useMenuPdf'
import { menus } from '../../../data'
import styles from './Menus.module.css'

export function Menus() {
  const { openMenuPdf } = useMenuPdf()

  return (
    <section className={`section section-light ${styles.menus}`} id="menus">
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
              <Link to={`/menus/${menu.slug}`} className={styles.cardImageLink}>
                <div className={styles.cardImageWrap}>
                  <img src={menu.image} alt={menu.alt} className={styles.cardImage} />
                </div>
              </Link>
              <div className={styles.cardContent}>
                <p className={styles.tag}>{menu.tag}</p>
                <h3 className={styles.title}>{menu.title}</h3>
                <p className={styles.desc}>{menu.description}</p>
                {menu.pdfPath ? (
                  <Button
                    variant="outline"
                    onClick={() => openMenuPdf(menu.pdfPath!, menu.title)}
                  >
                    View Menu
                  </Button>
                ) : (
                  <Button variant="outline" asChild href={`/menus/${menu.slug}`}>
                    View Menu
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
