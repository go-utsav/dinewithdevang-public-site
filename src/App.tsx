import { Header, Footer } from './components/layout'
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
  return (
    <>
      <a href="#main" className="sr-only sr-only-focusable">
        Skip to main content
      </a>
      <Header />
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
