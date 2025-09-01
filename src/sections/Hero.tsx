import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export const Hero: React.FC = () => (
  <section className="min-h-[88vh] grid place-items-center text-center container" id="home">
    <div>
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        Hi, I'm <span className="text-brand-600">Matheus Reis</span>
      </h1>
      <h2 className="mt-3 text-lg md:text-2xl text-gray-600 dark:text-gray-300">
        <Typewriter words={['Frontend Developer','React & Next.js','Open to Work']} loop cursor />
      </h2>
      <div className="mt-6 flex items-center justify-center gap-3">
        <a
          href={`${import.meta.env.BASE_URL}Matheus-Reis-CV.pdf`}
          download
          className="btn"
        >
          Download CV
        </a>
        <a href="#projects" className="btn-outline">See Projects</a>
      </div>
    </div>
  </section>
)
