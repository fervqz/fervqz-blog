/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(10 10 10)',
				'primary-darker': 'black'
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					md: '2rem',
					lg: '20rem',
					xl: '20rem',
					'2xl': '20rem',
				},
			},
		},
	},
	plugins: [animations],
}
