// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // <<< تأكد من أن هذا يغطي ملفاتك
    ],
    theme: {
      extend: { // <<< قسم التخصيص الضروري
        fontFamily: {
          sans: ['Cairo', 'sans-serif'], // <-- خطك العربي
        },
        colors: { // <-- ألوانك المخصصة للطابع الإسلامي
          primary: {
            DEFAULT: '#0a6375',
            light: '#1aa3a3',
            dark: '#043f4d',
          },
          secondary: '#c8a97e',
          accent: '#4a7f6d',
          background: '#f8f9fa',
          text: '#333333',
        },
      },
    },
    plugins: [],
  }