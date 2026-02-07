import { useState } from 'react'
import { Header, Footer } from './components/layout'
import { MenuPdfViewer } from './components/ui'
import {
  Hero,
  MeetChef,
  Celebration,
  Venues,
  Gallery,
  Menus,
  Testimonials,
  Reels,
  CtaBlock,
} from './components/sections'

function App() {
  const [openMenuPdf, setOpenMenuPdf] = useState<{ path: string; title: string } | null>(null)

  return (
    <>
      <a href="#main" className="sr-only sr-only-focusable">
        Skip to main content
      </a>
      {openMenuPdf && (
        <MenuPdfViewer
          pdfPath={openMenuPdf.path}
          title={openMenuPdf.title}
          onClose={() => setOpenMenuPdf(null)}
        />
      )}
      <Header onOpenMenuPdf={(path, title) => setOpenMenuPdf({ path, title })} />
      <main id="main">
        <Hero />
        <MeetChef />
        <Celebration />
        <Venues />
        <Gallery />
        <Menus />
        <Testimonials />
        <Reels />
        <CtaBlock />
      </main>
      <Footer />
    </>
  )
}

export default App
