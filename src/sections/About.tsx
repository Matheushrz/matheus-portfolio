import React from 'react'
import { motion } from 'framer-motion'

export const About: React.FC = () => (
  <section id="about" className="container py-20">
    <div className="grid md:grid-cols-[200px_1fr] items-center gap-8">
      <motion.img
        src={`${import.meta.env.BASE_URL}avatar.jpg`}
        alt="Matheus Reis"
        className="w-44 h-44 rounded-full shadow-soft object-cover justify-self-center md:justify-self-start"
        initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6}}
      />
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
          I am a Software Engineering student and Frontend Developer focused on building clean, accessible and performant web applications.
          I love modern UI, micro-interactions and smooth experiences. I am currently open to remote opportunities.
        </p>
      </motion.div>
    </div>
  </section>
)
