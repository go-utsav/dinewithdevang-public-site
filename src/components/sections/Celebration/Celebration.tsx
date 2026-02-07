import { useRef, useState, useEffect } from 'react'
import { SectionLabel, SectionHeading } from '../../ui'
import { ChevronLeft, ChevronRight } from '../../../assets/icons'
import { events } from '../../../data'
import styles from './Celebration.module.css'

export function Celebration() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const step = el.clientWidth * 0.8
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
  }

  return (
    <section className={`section ${styles.celebration}`} id="celebration">
      <div className="container">
        <div className={styles.header}>
          <div>
            <SectionLabel>The Art of Celebration</SectionLabel>
            <SectionHeading as="h2">The Art of Celebration</SectionHeading>
            <p className={styles.subtitle}>
              From intimate dinners to grand celebrations, we craft unforgettable culinary
              experiences tailored to your vision.
            </p>
          </div>
          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className={styles.scroll}
          onScroll={updateScrollState}
          role="list"
        >
          {events.map((event) => (
            <article key={event.id} className={styles.card} role="listitem">
              <div className={styles.cardImageWrap}>
                <img src={event.image} alt={event.alt} className={styles.cardImage} />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardDesc}>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
