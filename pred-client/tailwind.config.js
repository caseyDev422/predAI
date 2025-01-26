/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths for your project structure
      "./public/index.html",
    ],
    theme: {
      extend: {
        backgroundImage: {
            'heroes-bg': "url('public/predecessor_heroes.jpg')",
          },
      },
    },
    plugins: [],
  };
  