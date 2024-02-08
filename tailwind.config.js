/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "green-custom": "hsl(75, 94%, 57%)",
        "white-custom": "hsl(0, 0%, 100%)",
        "grey-custom": "hsl(0, 0%, 20%)",
        "dark-grey": "hsl(0, 0%, 12%)",
        "off-black": "hsl(0, 0%, 8%)"
      },
      "fontFamily": {
        "inter": ""
      },
      "textColor": {
        "green-custom": "hsl(75, 94%, 57%)",
        "white-custom": "hsl(0, 0%, 100%)",
        "grey-custom": "hsl(0, 0%, 20%)",
      }
    },
  },
  plugins: [],
}