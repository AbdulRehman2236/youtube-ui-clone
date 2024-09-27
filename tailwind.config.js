/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "770px",
      // => @media (min-width: 768px) { ... }

      "md-lg": "1000px",

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
