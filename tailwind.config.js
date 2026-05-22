/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#7F77DD',
          light: '#EEEDFE',
          dark: '#3C3489',
        },
        teal: {
          DEFAULT: '#1D9E75',
          light: '#E1F5EE',
        },
        coral: {
          DEFAULT: '#D85A30',
          light: '#FAECE7',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
      },
    },
  },
  plugins: [],
}
