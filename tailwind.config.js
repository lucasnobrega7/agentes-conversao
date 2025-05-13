/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      /**
       * -----------------------------
       *  COLOR TOKENS (brand system)
       * -----------------------------
       */
      colors: {
        // Neutral scaffold (uses CSS vars so you can theme via :root)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        /** Brand palette (static HEX) **/
        brand: {
          black: '#111827',
          'gray-light': '#F7F7F8',
          'gray-medium': '#E5E5E5',
          'gray-dark': '#4B5563',
          gradient: {
            start: '#46B2E0',
            mid: '#8A53D2',
            end: '#E056A0',
          },
        },

        // Semantic roles that still rely on CSS vars (can be themed)
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      /**
       * -----------------------------
       *  TYPOGRAPHY
       * -----------------------------
       */
      fontFamily: {
        display: ['"Sohren"', 'Inter', 'sans-serif'], // headings
        sans: ['Inter', 'sans-serif'], // body
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },

      /**
       * -----------------------------
       *  RADII
       * -----------------------------
       */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      /**
       * -----------------------------
       *  SHADOWS
       * -----------------------------
       */
      boxShadow: {
        subtle: '0 1px 3px rgba(0,0,0,0.05),0 1px 2px rgba(0,0,0,0.03)',
        medium: '0 4px 6px rgba(0,0,0,0.08),0 2px 4px rgba(0,0,0,0.05)',
      },

      /**
       * -----------------------------
       *  ANIMATIONS
       * -----------------------------
       */
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin-slow 4s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};