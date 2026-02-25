import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Impact from '@/components/Impact'
import WhatIDo from '@/components/WhatIDo'
import Projects from '@/components/Projects'
import Career from '@/components/Career'
import Tech from '@/components/Tech'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Impact />
        <WhatIDo />
        <Projects />
        <Career />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
