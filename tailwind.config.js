/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',    // or '#f9fafb' for a slight gray
          dark: '#1a1a1a',     // or '#111827' for dark mode
        },
        text: {
          light: '#1a1a1a',    // dark text for light mode
          dark: '#f9fafb',     // light text for dark mode
        },
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}