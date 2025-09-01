/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 500:'#8b5cf6', 600:'#7c3aed', 700:'#6d28d9' },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.08)',
        glow: '0 10px 30px rgba(124,58,237,.35)',
      }
    }
  },
  plugins: [],
}
