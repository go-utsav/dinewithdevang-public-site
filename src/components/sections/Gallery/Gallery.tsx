import { useState } from 'react'
import { SectionLabel, SectionHeading } from '../../ui'
import { ChevronLeft, ChevronRight, InstagramIcon } from '../../../assets/icons'
import { galleryItems, siteConfig } from '../../../data'
import type { GalleryItem } from '../../../types'
import styles from './Gallery.module.css'

interface GalleryProps {
  enableLightbox?: boolean
}

export function Gallery({ enableLightbox = false }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    if (enableLightbox) {
      setActiveIndex(index)
    }
  }

  const closeLightbox = () => setActiveIndex(null)

  const showPrev = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1 + galleryItems.length) % galleryItems.length)
  }

  const showNext = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % galleryItems.length)
  }

  const activeItem: GalleryItem | undefined =
    activeIndex !== null ? galleryItems[activeIndex] : undefined

  return (
    <section className={`section ${styles.gallery}`} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>Gallery</SectionLabel>
          <SectionHeading as="h2">Behind the Scenes</SectionHeading>
          <p className={styles.subtitle}>
            A glimpse into our culinary artistry and the memorable moments we create.
          </p>
        </div>
        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <div key={item.id} className={styles.item}>
              {enableLightbox ? (
                <button
                  type="button"
                  className={styles.itemButton}
                  onClick={() => openLightbox(index)}
                  aria-label={`View ${item.alt}`}
                >
                  <img src={item.image} alt={item.alt} className={styles.image} />
                </button>
              ) : (
                <img src={item.image} alt={item.alt} className={styles.image} />
              )}
            </div>
          ))}
        </div>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          <InstagramIcon className={styles.ctaIcon} />
          Follow the Journey @DineWithDevang
        </a>
      </div>

      {enableLightbox && activeItem && activeIndex !== null ? (
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
    </section>
  )
}
