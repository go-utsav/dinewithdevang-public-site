import { useEffect } from 'react'
import styles from './MenuPdfViewer.module.css'

interface MenuPdfViewerProps {
  pdfPath: string
  title?: string
  onClose: () => void
}

export function MenuPdfViewer({ pdfPath, title = 'Menu', onClose }: MenuPdfViewerProps) {
  const encodedUrl = encodeURI(pdfPath)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={`View ${title}`}>
      <div className={styles.backdrop} onClick={onClose} aria-hidden />
      <div className={styles.panel}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu viewer"
          >
            <span aria-hidden>×</span>
          </button>
        </div>
        <div className={styles.frameWrap}>
          <iframe
            src={encodedUrl}
            title={title}
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  )
}
