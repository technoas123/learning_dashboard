/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080906',
        text: '#e7eae1',
        primary: '#bcc7ae',
        secondary: '#445f5a',
        accent: '#7c99a2',
      },
    },
  },

  plugins: [],
}

