import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/public/images/hero-image.png')",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
