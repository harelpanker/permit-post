import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
    	extend: {
    		fontFamily: {
    			inter: ['var(--font-inter)'],
    			poppins: ['var(--font-poppins)'],
    			ibm: ['var(--font-ibm)']
    		},
    		colors: {
    			transparent: 'transparent',
    			_FDF8F6: '#FDF8F6',
    			_451E11: '#451E11',
    			_974EF2: '#974EF2',
    			_FDFCFC: '#FDFCFC',
    			_2B1400: '#2B1400',
    			_A666F4: '#A666F4',
    			_FFF1E7: '#FFF1E7',
    			_A18072: '#A18072',
    			_FFCCA7: '#FFCCA7',
    			_D1B9B0: '#D1B9B0',
    			_7011E4: '#7011E4',
    			_FFE8D7: '#FFE8D7',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
} satisfies Config;
