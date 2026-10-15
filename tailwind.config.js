export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { navy: { DEFAULT: '#0D1B2A', 800: '#13263a', 700: '#1b3350' }, gold: { DEFAULT: '#D4AF37', light: '#F0D675', dark: '#9a7b12' }, paper: '#F8F9FA' },
    fontFamily: { serif: ['"Playfair Display"', 'Merriweather', 'serif'], sans: ['Inter', 'Roboto', 'sans-serif'] },
    keyframes: { pulseRing: { '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,.55)' }, '70%': { boxShadow: '0 0 0 16px rgba(37,211,102,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' } } },
    animation: { 'pulse-ring': 'pulseRing 2.4s infinite' },
  } },
  plugins: [],
}
