export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",     // deep blue-black
        secondary: "#1e293b",
        accent: "#f472b6",      // pink
        highlight: "#fb7185",   // red-pink
      },
      boxShadow: {
        glow: "0 0 25px rgba(244,114,182,0.4)",
      }
    },
  },
  plugins: [],
}