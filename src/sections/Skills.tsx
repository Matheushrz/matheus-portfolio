import React from 'react'
import { motion } from 'framer-motion'

const skills = ['React','Next.js','TypeScript','JavaScript','Tailwind CSS','Git','Accessibility','Responsive Design']

export const Skills: React.FC = () => (
  <section id="skills" className="container py-20">
    <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold mb-8">Skills</motion.h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((s,i)=>(
        <motion.div
          key={s}
          initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
          transition={{duration:0.4, delay: i*0.05}}
          className="p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-800 hover:shadow-soft hover:-translate-y-0.5 transition"
        >
          {s}
        </motion.div>
      ))}
    </div>
  </section>
)
