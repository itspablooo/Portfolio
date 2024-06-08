// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2C3E50",
        "secondary": "#ECF0F1",
        "accent": "#3498DB",
        "neutral": "#34495E",
        "highlight": "#A9CCE3"
      },
      backgroundImage: {
        'frosted-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2))'
      }
    },
  },
  plugins: [],
};
