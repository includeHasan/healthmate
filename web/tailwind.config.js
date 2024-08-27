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
        // Light Theme Colors
        brightBlue: '#0565F9',        // Primary color: Buttons, links, and accents
        lightGray: '#EDEEEF',         // Background color: General background, cards
        mediumGray: '#B2B9C3',        // Secondary text color: Less emphasized text
        darkGray: '#423F3D',          // Primary text color: Main text
        nearWhite: '#FEFEFE',         // Surface color: Inputs, cards, and backgrounds that need more emphasis

        // Dark Theme Colors
        dark: {
          brightBlue: '#3A7BF1',      // Primary color: Buttons, links, and accents in dark mode
          lightGray: '#2D2D2D',       // Background color: General background, cards in dark mode
          mediumGray: '#555555',       // Secondary text color: Less emphasized text in dark mode
          darkGray: '#1F1F1F',         // Primary text color: Main text in dark mode
          nearWhite: '#1A1A1A',        // Surface color: Inputs, cards, and emphasized backgrounds in dark mode
        },
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};
