/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f0ff',
        'neon-purple': '#bf00ff',
        'neon-green': '#39ff14',
        'neon-pink': '#ff10f0',
        'dark-bg': '#0a0a0a',
        'card-bg': '#1a1a2e',
      },
      boxShadow: {
        'neon': '0 0 20px currentColor',
        'neon-lg': '0 0 40px currentColor',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
      }
    },
  },
  plugins: [],
}

