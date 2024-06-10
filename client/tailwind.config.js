// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enables dark mode via a CSS class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightModeBg: '#ffffff', // white
        lightModeText: '#000000', // black
        darkModeBg: '#000000', // black
        darkModeText: '#ffffff', // white
      },
    },
  },
  plugins: [],
}
