import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Assistant: React.FC = () => {
  const [input,setInput]=useState('')
  const [messages,setMessages]=useState<{role:'user'|'bot',text:string}[]>([])
  const send=()=>{
    if(!input.trim())return
    const msg={role:'user' as const,text:input}
    let reply="I can answer questions about Matheus, his skills and projects."
    const q=input.toLowerCase()
    if(q.includes('skills')) reply="Matheus works with React, Next.js, TypeScript, Tailwind."
    else if(q.includes('projects')) reply="Some projects: Scroll Odyssey, 3D Showcase, UI Playground."
    else if(q.includes('hire')) reply="Matheus is open for frontend roles!"
    setMessages([...messages,msg,{role:'bot',text:reply}])
    setInput('')
  }
  return (
    <section id="assistant" className="container py-20">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold mb-6">AI Assistant</motion.h2>
      <div className="max-w-xl mx-auto border rounded p-4 h-64 overflow-y-auto text-left mb-4 bg-gray-50 dark:bg-gray-800">
        {messages.map((m,i)=>(<p key={i} className={m.role==='user'?'text-brand-600':'text-gray-700 dark:text-gray-200'}><b>{m.role}:</b> {m.text}</p>))}
      </div>
      <div className="flex gap-2 max-w-xl mx-auto">
        <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 border rounded px-3 py-2 bg-gray-100 dark:bg-gray-700" placeholder="Ask something..."/>
        <button onClick={send} className="btn">Send</button>
      </div>
    </section>
  )
}
