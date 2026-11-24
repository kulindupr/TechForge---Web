import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const Solutions = lazy(() => import('./pages/Solutions'))
const ResearchSupport = lazy(() => import('./pages/ResearchSupport'))

function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0c10]">
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/research-support" element={<ResearchSupport />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
