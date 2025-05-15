/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        quantum: {
          dark: '#050A1C',
          darker: '#020814',
          darkest: '#010508',
          blue: '#1A2151',
          purple: '#4A1D96',
          teal: '#0D7A7E',
          accent: '#00F0FF',
          glow: '#3EFFFF',
          neon: '#FE01FE',
        },
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.quantum.glow), 0 0 20px theme(colors.quantum.glow)',
        'neon-strong': '0 0 5px theme(colors.quantum.glow), 0 0 10px theme(colors.quantum.glow), 0 0 15px theme(colors.quantum.glow), 0 0 30px theme(colors.quantum.glow)',
        'neon-purple': '0 0 5px theme(colors.quantum.neon), 0 0 20px theme(colors.quantum.neon)',
      },
    },
  },
  plugins: [],
};