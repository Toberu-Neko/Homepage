import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // 如果有用 pages 資料夾
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
