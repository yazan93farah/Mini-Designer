import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        buttonBlue: {
          DEFAULT: "#007ff4",
          dark: "#0069cc",
        },
        buttonGreen: {
          DEFAULT: "#5df400",
          dark: "#4cd000",
        },
        labelColor: "#0fce5b",
      },
    },
  },
  plugins: [],
};
