/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-space-mono)"],
        roboto: ["var(--font-roboto)"]
      }
    }
  },
  plugins: []
};
