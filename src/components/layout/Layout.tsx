import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MenuPdfViewer } from '../ui'

export function Layout() {
  const [openMenuPdfState, setOpenMenuPdfState] = useState<{ path: string; title: string } | null>(
    null
  )

  const openMenuPdf = (path: string, title: string) => {
    setOpenMenuPdfState({ path, title })
  }

  return (
    <>
      <a href="#main" className="sr-only sr-only-focusable">
        Skip to main content
      </a>
      {openMenuPdfState && (
        <MenuPdfViewer
          pdfPath={openMenuPdfState.path}
          title={openMenuPdfState.title}
          onClose={() => setOpenMenuPdfState(null)}
        />
      )}
      <Header onOpenMenuPdf={openMenuPdf} />
      <main id="main">
        <Outlet context={{ openMenuPdf }} />
      </main>
      <Footer />
    </>
  )
}
