import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sage: "#7A816C",
        dusty: "#D1A9A5",
        rust: "#AE6965",
        oak: "#A58B71",
        bone: "#E5DFD6",
        cream: "#F7F3EE",
        ink: "#2C2420",
        muted: "#8A7A75"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"]
      },
      boxShadow: {
        glass: "0 6px 28px rgba(174,105,101,.07), inset 0 1px 0 rgba(255,255,255,.8)",
        "glass-hover": "0 14px 44px rgba(174,105,101,.12), inset 0 1px 0 rgba(255,255,255,.9)"
      },
      backgroundImage: {
        "page-glow":
          "radial-gradient(ellipse 55% 45% at 10% 15%,rgba(209,169,165,.32) 0%,transparent 60%), radial-gradient(ellipse 50% 55% at 88% 8%,rgba(122,129,108,.18) 0%,transparent 55%), radial-gradient(ellipse 65% 38% at 55% 85%,rgba(165,139,113,.18) 0%,transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
