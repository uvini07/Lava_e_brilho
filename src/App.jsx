import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Highlight from './components/Highlight.jsx'
import BeforeAfter from './components/BeforeAfter.jsx'
import Custom from './components/Custom.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Revela os blocos ao rolar
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="bg" aria-hidden="true">
        <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
        <div className="grain" />
      </div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Highlight />
        <BeforeAfter />
        <Custom />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
