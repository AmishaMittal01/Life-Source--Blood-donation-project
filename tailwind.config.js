module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,

  theme: {
    extend: {
      keyframes: {
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.5" },
        },
        "pulse-slower": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.3" },
        },
      },

      animation: {
        "gradient-flow": "gradient-flow 12s ease infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        "pulse-slower": "pulse-slower 9s ease-in-out infinite",
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
