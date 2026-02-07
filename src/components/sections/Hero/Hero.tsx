import { Button } from '../../ui'
import { PlayIcon } from '../../../assets/icons'
import { IMAGES } from '../../../data'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.imageWrap}>
        <img
          src={IMAGES.heroChefPlating}
          alt="Private chef elegantly plating gourmet cuisine"
          className={styles.image}
        />
        <div className={`${styles.overlay} overlay-strong`} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Your Private Chef
          <br />
          Experience Awaits.
        </h1>
        <p className={styles.subtitle}>
          Restaurant-Quality Indian & International Cuisine,
          <br className={styles.br} />
          Crafted in Your Home or Venue.
        </p>
        <div className={styles.ctas}>
          <Button asChild href="#contact" variant="primary">
            Get Your Custom Menu
          </Button>
          <button type="button" className={styles.watchBtn}>
            <PlayIcon className={styles.playIcon} />
            Watch Our Story
          </button>
        </div>
      </div>
    </section>
  )
}
