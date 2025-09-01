import React, { useEffect, useState } from 'react'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Assistant } from './sections/Assistant'

export default function App() {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const ids = ['home','about','skills','projects','assistant','contact']
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id)
      })
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 })
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-black/5 dark:border-white/10">
        <div className="container h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold">Matheus</a>
          <nav className="flex gap-5 text-sm text-gray-600 dark:text-gray-300">
            <a href="#about" className={active==='about'?'active':''}>About</a>
            <a href="#skills" className={active==='skills'?'active':''}>Skills</a>
            <a href="#projects" className={active==='projects'?'active':''}>Projects</a>
            <a href="#assistant" className={active==='assistant'?'active':''}>Assistant</a>
            <a href="#contact" className={active==='contact'?'active':''}>Contact</a>
            <button onClick={()=>setDark(v=>!v)} className="btn-outline ml-2">{dark?'Light':'Dark'}</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Assistant />
        <Contact />
      </main>

      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="container">© {new Date().getFullYear()} Matheus Reis. Built with React + TS + Tailwind.</div>
      </footer>
    </div>
  )
}
