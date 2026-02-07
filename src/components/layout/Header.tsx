import { useState, useEffect, useRef } from 'react'
import { MenuIcon, ChevronDown } from '../../assets/icons'
import { siteConfig, menus, events } from '../../data'
import styles from './Header.module.css'

type DropdownId = 'menus' | 'services' | null

interface HeaderProps {
  onOpenMenuPdf?: (pdfPath: string, title: string) => void
}

export function Header({ onOpenMenuPdf }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<DropdownId>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const fn = () => setIsDesktop(mq.matches)
    fn()
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDropdownOpen(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setDropdownOpen(null)
  }

  const toggleDropdown = (id: DropdownId) => {
    setDropdownOpen((prev) => (prev === id ? null : id))
  }

  const navAriaHidden = !isDesktop && !menuOpen

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          {siteConfig.brandName}
        </a>
        <nav
          ref={navRef}
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-hidden={navAriaHidden}
        >
          <a href="#home" className={styles.navLink} onClick={closeMenu}>
            Home
          </a>

          <div className={styles.dropdownWrap}>
            <button
              type="button"
              className={styles.navTrigger}
              onClick={() => toggleDropdown('menus')}
              aria-expanded={dropdownOpen === 'menus'}
              aria-haspopup="true"
              aria-controls="header-menus"
              id="header-menus-trigger"
            >
              Menus
              <ChevronDown
                className={`${styles.chevron} ${dropdownOpen === 'menus' ? styles.chevronOpen : ''}`}
              />
            </button>
            <div
              id="header-menus"
              role="menu"
              aria-labelledby="header-menus-trigger"
              className={`${styles.dropdown} ${dropdownOpen === 'menus' ? styles.dropdownOpen : ''}`}
            >
              {menus.map((menu) =>
                menu.pdfPath && onOpenMenuPdf ? (
                  <button
                    key={menu.id}
                    type="button"
                    role="menuitem"
                    className={styles.dropdownItem}
                    onClick={() => {
                      onOpenMenuPdf(menu.pdfPath!, menu.title)
                      closeMenu()
                    }}
                  >
                    <span className={styles.dropdownItemTitle}>{menu.title}</span>
                  </button>
                ) : (
                  <a
                    key={menu.id}
                    href="#menus"
                    role="menuitem"
                    className={styles.dropdownItem}
                    onClick={closeMenu}
                  >
                    <span className={styles.dropdownItemTitle}>{menu.title}</span>
                  </a>
                )
              )}
            </div>
          </div>

          <div className={styles.dropdownWrap}>
            <button
              type="button"
              className={styles.navTrigger}
              onClick={() => toggleDropdown('services')}
              aria-expanded={dropdownOpen === 'services'}
              aria-haspopup="true"
              aria-controls="header-services"
              id="header-services-trigger"
            >
              Services
              <ChevronDown
                className={`${styles.chevron} ${dropdownOpen === 'services' ? styles.chevronOpen : ''}`}
              />
            </button>
            <div
              id="header-services"
              role="menu"
              aria-labelledby="header-services-trigger"
              className={`${styles.dropdown} ${dropdownOpen === 'services' ? styles.dropdownOpen : ''}`}
            >
              {events.map((event) => (
                <a
                  key={event.id}
                  href="#celebration"
                  role="menuitem"
                  className={styles.dropdownItem}
                  onClick={closeMenu}
                >
                  <span className={styles.dropdownItemTitle}>{event.title}</span>
                  <span className={styles.dropdownItemDesc}>{event.description}</span>
                </a>
              ))}
            </div>
          </div>

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
