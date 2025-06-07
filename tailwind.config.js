/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        primary: "#054C73",      // لون رئيسي
        black: "#333333",    // لون ثانوي
        accent: "#DFE9F4",       // لون مساعد
        gray: "#666666",      // لون حيادي
        secondary: "#F2F5FF",
      },
    },
  },
  plugins: [],
};
