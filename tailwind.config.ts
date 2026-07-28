import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        anthracite: {
          950: "#0a0d12",
          900: "#12161d",
          800: "#1a1f29",
          700: "#242b38",
          600: "#333c4d",
        },
        brand: {
          blue: {
            DEFAULT: "#2563eb",
            light: "#3b82f6",
            dark: "#1d4ed8",
          },
          amber: {
            DEFAULT: "#f59e0b",
            light: "#fbbf24",
            dark: "#d97706",
          },
        },
        // Theme-abhängige Design-Tokens: die eigentlichen Werte stehen als
        // CSS-Variablen in globals.css (:root = Tag-Modus, .dark = Nacht-
        // Modus). Das "rgb(var(...) / <alpha-value>)"-Muster erlaubt
        // weiterhin Tailwinds Opacity-Modifier (z. B. "text-text/60"), genau
        // wie bisher bei "text-white/60" – nur dass die Basisfarbe jetzt pro
        // Modus wechselt, statt fest "weiß" zu sein.
        background: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "cinematic-gradient":
          "linear-gradient(135deg, #0a0d12 0%, #12161d 45%, #1d2636 75%, #1d4ed8 100%)",
        "amber-glow":
          "radial-gradient(circle at 50% 30%, rgba(245,158,11,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(245,158,11,0.35)",
        "blue-glow": "0 0 60px -10px rgba(37,99,235,0.45)",
        // Nutzt die Schatten-CSS-Variable statt eines festen Schwarztons,
        // damit Kartenschatten im Tag-Modus (dunkler, dezenter Grauton
        // statt hartem Schwarz) und Nacht-Modus (Schwarz, wie bisher)
        // jeweils passend aussehen.
        card: "0 10px 40px -12px rgb(var(--color-shadow) / 0.45)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-slower": "float 9s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      containers: {},
    },
  },
  plugins: [],
};

export default config;
