/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Указываем путь к файлам внутри директории src
  ],
  theme: {
    extend: {}, // Здесь можно расширять стандартные настройки Tailwind
  },
  plugins: [], // Здесь можно добавлять сторонние плагины для Tailwind
}
