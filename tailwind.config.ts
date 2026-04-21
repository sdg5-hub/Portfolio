import type { Config } from "tailwindcss";

/**
 * Design tokens for the site.
 * Palette intentionally restrained: deep black base, off-white primary text,
 * a cool signal cyan for interactive accents, and a warm amber used sparingly
 * for achievement/philosophy moments. No rainbows. Everything earns its color.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        ink: {
          950: "#050507",
          900: "#0A0A0C",
          800: "#101014",
          700: "#17171C",
          600: "#1E1E24",
          500: "#2A2A32",
        },
        // Typography
        bone: {
          50: "#FAFAF7",
          100: "#F2F2EE",
          200: "#D6D6D1",
          300: "#A6A6A0",
          400: "#78787A",
          500: "#52525A",
        },
        // Primary signal (interactive, links, live indicators)
        signal: {
          DEFAULT: "#7DF9FF",
          50: "#EAFEFF",
          100: "#CFFBFF",
          200: "#A5F5FB",
          300: "#7DF9FF",
          400: "#5AE3EA",
          500: "#2BBFC7",
          600: "#1A8A90",
        },
        // Warm accent — used for achievement, philosophy, restraint required
        ember: {
          DEFAULT: "#E9B872",
          100: "#F8E7C3",
          200: "#F0CD95",
          300: "#E9B872",
          400: "#C99753",
          500: "#8A6734",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.035em",
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 9.5rem)", { lineHeight: "0.9", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
      },
      animation: {
        "pulse-soft": "pulse-soft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "drift": "drift 18s ease-in-out infinite",
        "scan": "scan 6s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2.2s linear infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-2%, 1%, 0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "grid-mid":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(125,249,255,0.08) 0%, transparent 60%)",
      },
      boxShadow: {
        "glow-signal": "0 0 40px -8px rgba(125,249,255,0.35)",
        "glow-ember": "0 0 60px -12px rgba(233,184,114,0.28)",
        "inner-hair": "inset 0 0 0 1px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
