/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '200px',
      'tablet': '765px',
      'desktop': '1280px'
    },
    colors: {
      'white': 'var(--white)',
      'scissors-gradient': 'var(--scissors-gradient)',
      'paper-gradient': 'var(--paper-gradient)',
      'rock-gradient': 'var(--rock-gradient)',
      'lizard-gradient': 'var(--lizard-gradient)',
      'cyan': 'var(--cyan)',
      'dark-text': 'var(--dark-text)',
      'score-text': 'var(--score-text)',
      'header-outline': 'var(--header-outline)',
      'radial-gradient': 'var(--radial-gradient)'
    },
    extend: {},
  },
  plugins: [],
}