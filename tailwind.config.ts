import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(110deg, #272727 .06%, #171717)",
      },
      boxShadow: {
        "inset-custom": "inset 0 0 6px hsla(0, 0%, 100%, .1)",
      },
    },
  },
  plugins: [],
};
export default config;
