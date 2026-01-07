/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: "#F5C443",
        textPrimary: "#F8FAFC",
        textSecondary: "#CBD5E1",
        bgLight: "#F1F5F9"
      }
    },
  },
  plugins: [],
};
