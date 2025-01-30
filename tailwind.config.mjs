/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
      monospace: ['"Monaspace Neon"'],
    },
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavor: "latte",
    }),
  ],
};
