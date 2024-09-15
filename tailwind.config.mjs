/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, rgba(2,0,36,0.90) 40%, rgba(19,117,225,0.60) 75%, rgba(0,212,255,0.40) 99%) ",
      },
      fontFamily: {
        oswald: ["Oswald Variable", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
