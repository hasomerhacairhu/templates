import emailPreset from "tailwindcss-preset-email"

/** @type {import('tailwindcss').Config} */
export default {
  presets: [emailPreset],
  content: [
    "./emails/**/*.html",
    "./layouts/**/*.html",
    "./components/**/*.html",
    "./dynamic_templates_maizzle/**/*.html"
  ]
}
