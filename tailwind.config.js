/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
    },
    boxShadow: {
      'sh': '0 5px 15px  rgba(0, 0, 0, 0.35)',
    },
    borderRadius :{
      'town': '150px 0 0 100px',
      'reflex': '0 150px 100px 0',
      },
    },
    
  },
  plugins: [],
};