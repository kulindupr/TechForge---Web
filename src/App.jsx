import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleNetwork from './components/ParticleNetwork'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import ResearchSupport from './pages/ResearchSupport'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/research-support" element={<ResearchSupport />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
