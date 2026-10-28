/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#112032',
        'ink-soft': '#304052',
        teal: '#157C70',
        'teal-dark': '#0B5C53',
        mint: '#D8F1E2',
        coral: '#FF8A72',
        cream: '#F8F7F2',
        mist: '#E9EFEC',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'card': '28px',
        'pill': '9999px',
      },
    },
  },
  plugins: [],
};
