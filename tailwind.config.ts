import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'Roboto'],
      'serif': [ 'Lora', 'ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"'],
    },
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
