/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./public/**/*.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./src/components/**/*.{js,ts,jsx,tsx}", 
    "./src/pages/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#1e3a8a',
        rosegold: '#b76e79',
        yellow: {
          400: '#fbbf24',
        },
        red: {
          400: '#f87171',
          500: '#ef4444',
        },
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
