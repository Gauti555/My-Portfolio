import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "past-work-gradient": "linear-gradient(180deg, #1a1a1a, #0a0a0a)",
        "portfolio-gradient": "linear-gradient(180deg, #1a1a1a, #2a2a2a)",
        "hero-gradient": "linear-gradient(180deg, #0a0a0a, #1a1a1a)",
        "mountains-image": "url('/assets/mountains.png')",
        "planets-image": "url('/assets/planets.png')",
        "sun-image": "url('/assets/sun.png')",
        "stars-image": "url('/assets/stars.png')",
      },
      colors: {
        "brand-black": "#0a0a0a",
        "brand-gray": "#1a1a1a",
        "hero-bottom": "#ffffff05",
        "primary": "#ff6b00", // Vibrant Orange
      },
    },
  },
  plugins: [],
} satisfies Config;
