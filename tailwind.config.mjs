/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-green': '#81CA00',
				'custom-blue': '#2690B3',
				'custom-black-title': '#10313C',
				'custom-gray-bg': '#F8F8F8',
				'custom-gd-orange1': '#F3BC3C',
				'custom-gd-orange2': '#9A7B31',
				'custom-gd-blue1': '#59B3CE',
				'custom-gd-blue2': '#326277',
			}		
		},
	},
	plugins: [],
}
