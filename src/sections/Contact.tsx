import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Contact: React.FC = () => (
  <section id="contact" className="container py-20">
    <h2 className="text-3xl font-bold mb-6">Contact</h2>
    <p>Get in touch:</p>
    <div className="mt-6 flex justify-center gap-6 text-2xl">
      <a href="mailto:matheushr10@hotmail.com" className="hover:text-brand-600 transition" aria-label="Email"><FaEnvelope/></a>
      <a href="https://github.com/Matheushrz" target="_blank" className="hover:text-brand-600 transition" aria-label="GitHub"><FaGithub/></a>
      <a href="https://linkedin.com/in/matheus-reis-bb38a7265" target="_blank" className="hover:text-brand-600 transition" aria-label="LinkedIn"><FaLinkedin/></a>
    </div>
  </section>
)
