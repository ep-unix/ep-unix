/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',        
        white: '#ffffff',
        primary: '#0582CA',
        primary_light: '#00A6FB',
        primary_dark: '#006494',
        error: '#CC342B',
        error_light: '#CC4040',
        error_dark: '#CC1414',
        background: '#051923',
        background_light: '#003554',
      }
    },
  },
  plugins: [],
}
