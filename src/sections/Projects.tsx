import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { name:'Scroll Odyssey', url:'https://github.com/Matheushrz/Scroll-Odyssey', desc:'Immersive storytelling site.' },
  { name:'Interactive 3D Showcase', url:'https://github.com/Matheushrz/Interactive-3D-Showcase', desc:'3D carousel & animations.' },
  { name:'UI Playground', url:'https://github.com/Matheushrz/UI-Playground', desc:'Advanced UI microinteractions.' },
  { name:'AI Portfolio Dashboard', url:'https://github.com/Matheushrz/ai-portfolio-dashboard', desc:'GitHub API + Assistant.' },
]

export const Projects: React.FC = () => (
  <section id="projects" className="container py-20">
    <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold mb-8">Projects</motion.h2>
    <ol className="space-y-6">
      {projects.map((p,i)=>(
        <motion.li key={p.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}}>
          <a href={p.url} target="_blank" className="relative inline-block font-semibold text-brand-600 after:block after:h-0.5 after:bg-brand-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
            {p.name}
          </a>
          <span className="text-gray-600 dark:text-gray-300"> — {p.desc}</span>
        </motion.li>
      ))}
    </ol>
    <p className="mt-8"><a href="https://github.com/Matheushrz" target="_blank" className="btn-outline">See more on GitHub</a></p>
  </section>
)
