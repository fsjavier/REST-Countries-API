/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        elements: "var(--color-elements)",
        input: "var(--color-input)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
