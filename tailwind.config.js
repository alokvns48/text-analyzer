/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [

    // Background color classes
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
    'bg-blue-100',
    'bg-green-100',
    'bg-yellow-100',


    // Focus color classes
    "focus:ring-blue-500",
    "focus:ring-yellow-500",
    "focus:ring-green-500",

    // Hover color classes
    "hover:bg-yellow-600",
    "hover:bg-green-600",
    "hover:bg-blue-600",

     // Text color classes
     'text-blue-800',
     'text-green-800',
     'text-yellow-800',

     // Value color classes
     'text-blue-600',
     'text-green-600',
     'text-yellow-600',

  ],
};
