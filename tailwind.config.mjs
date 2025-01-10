/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#167DB7",
        accet: "#FE5230",
        dark: "",
      },
      backgroundImage: {
        "hero-pattern": "url(/hero-pattern.webp)",
      },
      borderRadius: {
        "4xl": "3rem",
      },
    },
  },
  plugins: [],
};
