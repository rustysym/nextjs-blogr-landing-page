/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blogr-very-light-red": "hsl(13, 100%, 72%)",
        "blogr-light-red": "hsl(353, 100%, 62%)",
        "blogr-cta-text": "hsl(356, 100%, 66%)",
        "blogr-cta-hover":"hsl(355, 100%, 74%)",
        "blogr-very-dark-blue": "hsl(208, 49%, 24%)",
        "blogr-very-dark-grayish-blue": "hsl(207, 13%, 34%)",
        "blogr-grd-dark-blue": "hsl(237, 17%, 21%)",
        "blogr-grd-light-blue": "hsl(237, 23%, 32%)",
        "blogr-footer-gray":"hsl(240, 10%, 16%)",
        "blogr-footer-text":"hsl(240, 2%, 79%)",
      },
      fontFamily: {
        overpass: "var(--font-overpass)",
        ubuntu: "var(--font-ubuntu)",
      },
    },
  },
  plugins: [],
};
