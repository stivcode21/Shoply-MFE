/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./apps/**/*.{html,js,jsx,ts,tsx}", "./libs/**/*.{js,jsx,ts,tsx,json}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.8s ease both",
        "rise-delayed": "rise 0.9s ease 0.1s both",
        "rise-late": "rise 0.9s ease 0.2s both",
        fade: "fade 0.6s ease both",
      },
    },
  },
  plugins: [],
};
