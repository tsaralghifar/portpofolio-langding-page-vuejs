module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      background:{
      // 'primary' : '#212B37'
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        ternary: 'var(--bg-background-ternary)'
      },
      kata:{
        primary: 'var(--text-kata-primary)',
        secondary: 'var(--text-kata-secondary)',
        ternary: 'var(--text-kata-ternary)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
