/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "hsl(322, 100%, 66%)",
        "light-pink": "hsl(321, 100%, 78%)",
        "light-red": "hsl(0, 100%, 63%)",
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "very-pale-blue": "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        headings: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
