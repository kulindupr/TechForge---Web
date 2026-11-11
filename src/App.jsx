import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleNetwork from './components/ParticleNetwork'
import Home from './pages/Home'

const Solutions = lazy(() => import('./pages/Solutions'))
const ResearchSupport = lazy(() => import('./pages/ResearchSupport'))

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 h-screen w-screen">
        <ParticleNetwork
          particleColor="#082f49"
          lineColor="8, 47, 73"
          backgroundColor="#060c1a"
        />
      </div>
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
