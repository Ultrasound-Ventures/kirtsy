/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand': {
            50: '#FFF5F5',
            100: '#FED7D7',
            500: '#F87171',
            600: '#EF4444',
          }
        }
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light"],
    },
  }