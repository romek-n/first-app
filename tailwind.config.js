/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontSize: {
        xxs: ['clamp(.8rem, calc(0.7rem + 0.25vw), 1rem)', '1.1'],
        xs: ['clamp(1.00rem, calc(0.92rem + 0.39vw), 1.10rem)', '1.1'],
        sm: ['clamp(1.07rem, calc(0.95rem + 0.55vw), 1.35rem)', '1.1'],
        base: ['clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)', '1.15'],
        lg: ['clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)', '1.1'],
        xl: ['clamp(1.42rem, calc(1.06rem + 1.40vw), 2.34rem)', '1.1'],
        '2xl': ['clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)', '1.3'],
        '3xl': ['clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)', '1.3'],
        '4xl': ['clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)', '1.3'],
        '5xl': ['clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)', '1.3'],
        '6xl': ['clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)', '1.3'],
      },
    },
  },
  plugins: [],
}