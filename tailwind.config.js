module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Add the forms plugin
  ],
};
