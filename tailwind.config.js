/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"], // This scans all files in the project for Tailwind classes
  theme: {
    extend: {
      animation: {
        scrollDown: 'scrollDown 8s ease-in-out', // Add custom animation
      },
      keyframes: {
        scrollDown: {
          '0%': {
            transform: 'translateY(0)', // Initial position (start)
          },
          '100%': {
            transform: 'translateY(-75%)', // Move the image up by 75% (end)
          },
        },
      },
    },
  },
  plugins: [],
}
