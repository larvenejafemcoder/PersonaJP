/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#FAFAF7",
          secondary: "#F2F1EC",
        },
        paper: "#FFFFFF",
        text: {
          primary: "#111111",
          secondary: "#666666",
          light: "#999999",
        },
        border: "rgba(0,0,0,0.08)",
        accent: {
          red: "#B43C2F",
          gold: "#B99B5F",
        },
        ink: "#0F0F0F",
        shadow: "rgba(15,15,15,0.08)",
      },
      fontFamily: {
        body: ['"Noto Sans JP"', '"Inter"', "system-ui", "sans-serif"],
        heading: ['"IBM Plex Sans"', '"Inter"', "system-ui", "sans-serif"],
        jp: ['"Noto Sans JP"', "sans-serif"],
      },
      spacing: {
        "section": "12rem",
        "section-mobile": "6rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "reveal": "reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
