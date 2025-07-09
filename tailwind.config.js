/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#722F37',
        'burgundy-dark': '#5A252A',
        gold: '#D4AF37',
        // 'deep-red': '#B22222',
        // 'wine-purple': '#722F37',
        charcoal: '#2C2C2C',
        cream: '#F5F5DC',
        // 'accent-orange': '#FF6B35',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
