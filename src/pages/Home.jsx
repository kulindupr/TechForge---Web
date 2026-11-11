import Hero from '../components/Hero'
import Divisions from '../components/Divisions'
import WhyChoose from '../components/WhyChoose'
import About from '../components/About'
import Projects from '../components/Projects'
// Blog: no real posts yet, section disabled for now
// import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Divisions />
      <WhyChoose />
      <About />
      <Projects />
      {/* <Blog /> */}
      <Testimonials />
      <CTA />
    </>
  )
}
