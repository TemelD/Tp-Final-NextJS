import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        header: {
          1: '#012E33',
          2: '#21464E',
          3: '#7F9EA1',
          4: '#70DADA',
        },
        main: {
          1: '#EDF5F5',
          2: '#8A9B95'
        }
      },
    },
  },
  plugins: [],
};
export default config;
