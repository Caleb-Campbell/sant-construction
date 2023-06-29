import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sant-yellow-100": "#ecb810",
        "sant-yellow-200": "#b9900c",
        "sant-dark": "#262626",
      },
    },
  },
  plugins: [],
} satisfies Config;
