import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
	container: {
		center: true,
		padding: '15px'
	},
	screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
	fontFamily: {
		primary: 'var(--font-jetbrainsMono)'
	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		colors: {
			primary: 'hsl(220, 60%, 10%)',
			textColor: {
				DEFAULT: 'hsl(220, 40%, 85%)',
				secondary: 'hsl(220, 20%, 70%)',
			},
			highlightColor: 'hsl(220, 60%, 75%)',
			importantColor: {
				DEFAULT: 'hsl(0, 75%, 55%)',
				hover: 'hsl(0, 75%, 50%)',
			},
			hoverColor: 'hsl(220, 60%, 55%)',
			accent: {
			DEFAULT: 'hsl(160, 100%, 50%)',
			hover: 'hsl(160, 100%, 45%)'
			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
