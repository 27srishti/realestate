/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2d3436",
        secondary: "#FDFBF7", // Sand Stone
        accent: "#1A1A1A", // True Black for high-end contrast
        "accent-soft": "#4A4A4A",
        "pastel-blue": "#F2F0E9", // Clay Bone
        "pastel-pink": "#E8E4D9", // Warm Ash
        "pastel-green": "#F9F7F2", // Paper White
        "text-main": "#1e272e",
        "text-muted": "#485460",
        "text-mist": "#808e9b",
        "deep-onyx": "#0a0a0b",
        glass: "rgba(255, 255, 255, 0.4)",
        "glass-border": "rgba(255, 255, 255, 0.6)",
        "curator-teal": "#00d1b2",
        "deep-ink": "#0b0c10",
        "slate-soft": "#4b5563",
        Onyx: {
          900: "#0a0a0b",
          800: "#141415",
          700: "#1e1e20",
        },
        Mist: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          400: "#94a3b8",
        },
      },
      boxShadow: {
        soft: "0 20px 40px rgba(0, 0, 0, 0.03)",
        float: "0 30px 60px rgba(108, 92, 231, 0.1)",
        kinetic: "0 40px 100px -20px rgba(0, 0, 0, 0.15)",
        "inner-glow": "inset 0 2px 10px rgba(255, 255, 255, 1)",
      },
      animation: {
        "float-subtle": "float-subtle 6s ease-in-out infinite",
        "slow-pan": "slow-pan 30s linear infinite",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
      },
      keyframes: {
        "float-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "slow-pan": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.1) translate(-2%, -2%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
