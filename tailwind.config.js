module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // Dark gray
        secondary: '#3b82f6', // Bright blue
        accent: '#f97316', // Orange for accent
      },
      fontSize: {
        base: '16px',
        xl: '24px',
        '2xl': '30px',
        '3xl': '36px',
      },
    },
  },
  plugins: [],
}

