/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%': { borderRadius: '42% 58% 63% 37% / 41% 41% 59% 59%' },
          '33%': { borderRadius: '58% 42% 37% 63% / 56% 33% 67% 44%' },
          '66%': { borderRadius: '45% 55% 52% 48% / 34% 58% 42% 66%' },
          '100%': { borderRadius: '42% 58% 63% 37% / 41% 41% 59% 59%' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.6' },
        },
        'rotate-cube': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
      },
      animation: {
        'float-y': 'float-y 4s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'fade-in-up': 'fade-in-up .7s ease both',
        twinkle: 'twinkle 3s ease-in-out infinite',
        'rotate-cube': 'rotate-cube 16s linear infinite',
      },
    },
  },
  plugins: [],
};
