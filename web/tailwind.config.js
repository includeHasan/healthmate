/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        
        primary: 'var(--color-primary)',          // Primary color for buttons, links, etc.
        background: 'var(--color-background)',    // Background color
        surface: 'var(--color-surface)',          // Surface elements like cards, inputs, etc.
        textPrimary: 'var(--color-text-primary)', // Primary text color
        textSecondary: 'var(--color-text-secondary)', // Secondary text color
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};
