/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada del portfolio usando CSS variables
        'portfolio': {
          'deep': 'var(--portfolio-deep)',
          'dark': 'var(--portfolio-dark)', 
          'base': 'var(--portfolio-base)',
          'medium': 'var(--portfolio-medium)',
          'accent': 'var(--portfolio-accent)',
          'gradient-1': 'var(--portfolio-gradient-1)',
          'gradient-2': 'var(--portfolio-gradient-2)',
          'gradient-3': 'var(--portfolio-gradient-3)',
          'gradient-4': 'var(--portfolio-gradient-4)',
          'text': 'var(--portfolio-text)',
        }
      }
    },
  },
  plugins: [],
};
