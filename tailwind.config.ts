import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--poppins-font)"]
      },
      padding: {
        "1/1": "100%"
      },
      aspectRatio: {
        'sd':'4/3',

      },
      colors: {
        twitter: "#00acee",
        facebook: {
          500: "#1eb5ff",
          600: "#0698ff",
          700: "#0084ff",
          800: "#0864c5"
        },
        github: {
          900: "#24292e",
          700: "#586069"
        },
        upwork: {
          normal: "#14a800",
          hover: "#23dc06"
        },
        linkedin: "#0072b1"
      }
    }
  },
  plugins: []
};
export default config;
