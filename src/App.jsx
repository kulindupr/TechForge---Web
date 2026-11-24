import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const Digital = lazy(() => import('./pages/Digital'))
const Research = lazy(() => import('./pages/Research'))
const Innovation = lazy(() => import('./pages/Innovation'))
const Insights = lazy(() => import('./pages/Insights'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const About = lazy(() => import('./pages/About'))
const ProjectsPage = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <div className="relative min-h-screen bg-[#090a0c]">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/research" element={<Research />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* Client-side fallback for the renamed routes — the authoritative 301 lives in vercel.json */}
          <Route path="/solutions" element={<Navigate to="/digital" replace />} />
          <Route path="/research-support" element={<Navigate to="/research" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
