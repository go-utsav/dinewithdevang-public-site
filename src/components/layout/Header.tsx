import { useState, useEffect } from 'react'
import { MenuIcon } from '../../assets/icons'
import { siteConfig } from '../../data'
import styles from './Header.module.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const fn = () => setIsDesktop(mq.matches)
    fn()
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const navAriaHidden = !isDesktop && !menuOpen

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          {siteConfig.brandName}
        </a>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-hidden={navAriaHidden}>
          <a href="#home" className={styles.navLink} onClick={closeMenu}>
            Home
          </a>
          <a href="#contact" className={styles.navLink} onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>
    </header>
  )
}
