import { useState } from 'react'
import { SectionLabel, SectionHeading } from '../../ui'
import { ChevronLeft, ChevronRight } from '../../../assets/icons'
import { testimonials } from '../../../data'
import styles from './Testimonials.module.css'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const go = (dir: 'prev' | 'next') => {
    if (dir === 'prev') setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
    else setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
  }

  return (
    <section className={`section ${styles.testimonials}`} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <SectionLabel>Testimonials</SectionLabel>
          <SectionHeading as="h2">Celebrated by Our Guests</SectionHeading>
        </div>
        <div className={styles.slider}>
          <div className={styles.quoteWrap}>
            <blockquote className={styles.quote}>{t.quote}</blockquote>
            <div className={styles.meta}>
              <p className={styles.author}>{t.author}</p>
              <p className={styles.event}>{t.event}</p>
            </div>
          </div>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => go('prev')}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <div className={styles.dots} role="tablist" aria-label="Testimonials">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={styles.dot}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => go('next')}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
