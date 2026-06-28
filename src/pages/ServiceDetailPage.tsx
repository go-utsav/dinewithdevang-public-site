import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from '../assets/icons'
import { usePageTitle } from '../hooks/usePageTitle'
import { Button } from '../components/ui'
import { getEventBySlug, siteConfig } from '../data'
import type { EventGalleryImage } from '../types'
import styles from './DetailPage.module.css'

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const event = slug ? getEventBySlug(slug) : undefined
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const gallery = event?.gallery ?? []

  usePageTitle(
    event ? `${event.title} | Dine With Devang` : 'Service Not Found | Dine With Devang'
  )

  const closeLightbox = () => setActiveIndex(null)

  const showPrev = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1 + gallery.length) % gallery.length)
  }

  const showNext = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % gallery.length)
  }

  const activeItem: EventGalleryImage | undefined =
    activeIndex !== null ? gallery[activeIndex] : undefined

  if (!event) {
    return (
      <section className={`section ${styles.notFound}`}>
        <div className="container">
          <h1 className={styles.notFoundTitle}>Service not found</h1>
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
          <img src={event.image} alt={event.alt} className={styles.heroImage} />
          <div className={`${styles.heroOverlay} overlay-strong`} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>{event.title}</h1>
          <p className={styles.description}>{event.description}</p>
        </div>
      </div>
      <div className={`container ${styles.body}`}>
        <p className={styles.bodyText}>
          From intimate gatherings to grand celebrations, Devang crafts bespoke menus tailored to
          your vision. Every dish is prepared with premium ingredients, refined technique, and the
          warmth of true hospitality.
        </p>
        {gallery.length > 0 ? (
          <section className={styles.gallery} aria-label={`${event.title} gallery`}>
            <h2 className={styles.galleryTitle}>From a recent garden BBQ</h2>
            <div className={styles.galleryGrid}>
              {gallery.map((item, index) => (
                <div key={item.image} className={styles.galleryItem}>
                  <button
                    type="button"
                    className={styles.galleryButton}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View ${item.alt}`}
                  >
                    <img src={item.image} alt={item.alt} className={styles.galleryImage} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : null}
        <div className={styles.actions}>
          <Button asChild href="/contact" variant="primary">
            Get Your Free Quote Today
          </Button>
          <Button
            asChild
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(event.title)}`}
            variant="outline"
          >
            Enquire About This Service
          </Button>
        </div>
        <p className={styles.bodyText}>
          <Link to="/">← Back to Home</Link>
        </p>
      </div>

      {activeItem && activeIndex !== null ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Gallery image">
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            ×
          </button>
          <button
            type="button"
            className={styles.lightboxNav}
            onClick={showPrev}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <img src={activeItem.image} alt={activeItem.alt} className={styles.lightboxImage} />
          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
            onClick={showNext}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
      ) : null}
    </article>
  )
}
