import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { GalleryPage } from './pages/GalleryPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { MenuDetailPage } from './pages/MenuDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/menus/:slug" element={<MenuDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
