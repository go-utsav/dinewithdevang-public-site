import { Link, useParams } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { useMenuPdf } from '../hooks/useMenuPdf'
import { Button } from '../components/ui'
import { getMenuBySlug, siteConfig } from '../data'
import styles from './DetailPage.module.css'

export function MenuDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const menu = slug ? getMenuBySlug(slug) : undefined
  const { openMenuPdf } = useMenuPdf()

  usePageTitle(menu ? `${menu.title} | Dine With Devang` : 'Menu Not Found | Dine With Devang')

  if (!menu) {
    return (
      <section className={`section ${styles.notFound}`}>
        <div className="container">
          <h1 className={styles.notFoundTitle}>Menu not found</h1>
          <Button asChild href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </section>
    )
  }

  return (
    <article className={styles.detail}>
      <div className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <img src={menu.image} alt={menu.alt} className={styles.heroImage} />
          <div className={`${styles.heroOverlay} overlay-strong`} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.description}>{menu.tag}</p>
          <h1 className={styles.title}>{menu.title}</h1>
          <p className={styles.description}>{menu.description}</p>
        </div>
      </div>
      <div className={`container ${styles.body}`}>
        <p className={styles.bodyText}>
          Each menu is crafted with passion, using the finest ingredients and time-honored
          techniques. View the full menu or contact us to discuss a bespoke dining experience.
        </p>
        <div className={styles.actions}>
          {menu.pdfPath ? (
            <Button
              variant="primary"
              onClick={() => openMenuPdf(menu.pdfPath!, menu.title)}
            >
              View Menu
            </Button>
          ) : null}
          <Button
            asChild
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Menu: ${menu.title}`)}`}
            variant="outline"
          >
            Enquire About This Menu
          </Button>
        </div>
        <p className={styles.bodyText}>
          <Link to="/">← Back to Home</Link>
        </p>
      </div>
    </article>
  )
}
