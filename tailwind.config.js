export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        navy: '#264181',
        orange: '#E68733',
        ink: '#1F2A44',
        muted: '#6B7280',
        soft: '#F5F7FB',
        border: '#E5EAF1',
        footer: '#1F2430',
      },
      fontFamily: {
        display: ['Manrope', 'Montserrat', 'Segoe UI', 'sans-serif'],
        body: ['Source Sans 3', 'Lato', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
