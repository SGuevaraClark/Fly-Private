export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'display': ['Playfair Display', 'serif'],
      },
      colors: {
        light: '#FFFFFF',
        dark: '#1A1A1A',
        primary: '#C19D60', // Luxury gold color
        secondary: '#F5F5F5',
        border: '#E5E5E5',
      },
      // ... other existing theme extensions ...
    },
  },
  plugins: [],
  // ... existing plugins and other config ...
} 