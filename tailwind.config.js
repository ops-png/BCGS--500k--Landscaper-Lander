/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1F2933',
        navy: '#203159',
        gold: '#C9A24D',
        'off-white': '#F5F7FA',
      },
    },
  },
  plugins: [],
}
