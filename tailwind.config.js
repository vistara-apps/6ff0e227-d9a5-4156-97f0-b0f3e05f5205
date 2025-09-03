/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bg: 'hsl(210, 25%, 95%)',
        accent: 'hsl(140, 60%, 45%)',
        primary: 'hsl(210, 70%, 50%)',
        surface: 'hsl(0, 0%, 100%)',
        destructive: 'hsl(350, 80%, 50%)',
        textPrimary: 'hsl(210, 25%, 15%)',
        textSecondary: 'hsl(210, 25%, 45%)',
        dark: {
          bg: 'hsl(220, 25%, 8%)',
          surface: 'hsl(220, 25%, 12%)',
          primary: 'hsl(210, 70%, 60%)',
          accent: 'hsl(140, 60%, 55%)',
          textPrimary: 'hsl(210, 25%, 85%)',
          textSecondary: 'hsl(210, 25%, 65%)',
        },
      },
      borderRadius: {
        lg: "16px",
        md: "10px",
        sm: "6px",
      },
      spacing: {
        'lg': '20px',
        'md': '12px',
        'sm': '8px',
        'xl': '24px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(210, 50%, 15%, 0.08)',
        'modal': '0 8px 24px hsla(210, 50%, 15%, 0.12)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.22,1,0.36,1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'slow': '400ms',
      },
    },
  },
  plugins: [],
};
