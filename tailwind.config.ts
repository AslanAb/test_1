import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pt_root_ui_300: ["PTRootUIWebLight", "sans-serif"],
        pt_root_ui_400: ["PTRootUIWebRegular", "sans-serif"],
        pt_root_ui_500: ["PTRootUIWebMedium", "sans-serif"],
        pt_root_ui_700: ["PTRootUIWebBold", "sans-serif"],
        inter_400: ["InterRegular"],
        inter_500: ["InterMedium"],
        inter_600: ["InterSemiBold"],
      },
      colors: {
        main_grey: "#3333331A",
        text_grey: "#333333",
        main_green: "#6EB63C",
      },
      screens: {
        "576": "576px",
        "1124": "1124px",
        "1160": "1160px",
        "1400": "1400px",
        "1600": "1600px",
        "1920": "1920px",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
