import tailwindcssAnimate from "tailwindcss-animate";

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
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          // Custom colors for Cluster Creations
          'cyan': {
            DEFAULT: '#00FFFF',
            50: '#E0FFFF',
            100: '#B3FFFF',
            200: '#80FFFF',
            300: '#4DFFFF',
            400: '#1AFFFF',
            500: '#00E6E6',
            600: '#00CCCC',
            700: '#00B3B3',
            800: '#00999A',
            900: '#008080',
          },
          'dark': {
            DEFAULT: '#121212',
            50: '#2C2C2C',
            100: '#262626',
            200: '#202020',
            300: '#1A1A1A',
            400: '#141414',
            500: '#0F0F0F',
            600: '#0A0A0A',
            700: '#050505',
            800: '#030303',
            900: '#000000',
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
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
          // Custom animations
          "pulse-glow": {
            "0%, 100%": { 
              opacity: 1,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
            },
            "50%": { 
              opacity: 0.7,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)"
            },
          },
          "float": {
            "0%, 100%": {
              transform: "translateY(0px)"
            },
            "50%": {
              transform: "translateY(-10px)"
            }
          },
          "reveal": {
            "0%": {
              opacity: 0,
              transform: "translateY(20px)"
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)"
            }
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "pulse-glow": "pulse-glow 3s infinite ease-in-out",
          "float": "float 6s infinite ease-in-out",
          "reveal": "reveal 0.8s ease-out forwards",
        },
    plugins: [tailwindcssAnimate],
  } },
    plugins: [require("tailwindcss-animate")],
  }