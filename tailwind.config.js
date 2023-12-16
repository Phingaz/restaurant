/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        lora: ["var(--lora)", "system-ui", "sans-serif"],
        poppins: ["var(--poppins)", "system-ui", "sans-seri"],
      },
      colors: {
        body: "#e5e5e5",
        green: { DEFAULT: "#539592", hover: "#40807d" },
        darkGreen: { DEFAULT: "#273029", hover: "#1b211c" },
        orange: { DEFAULT: "#f2994a", hover: "#da863c" },
      },
      boxShadow: {
        primary: "40px 4px 40px 0px rgba(68,68,68, 0.25)",
      },
      backgroundImage: {
        hero: 'url("/assets/hero/bg.png")',
        menu: 'url("/assets/menu/bg.png")',
        reserve: 'url("/assets/reserve/bg.png")',
        footer: 'url("/assets/footer/bg.png")',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
