/** @type {import('tailwindcss').Config} */
module.exports = {
    
      content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
    
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
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
  }
