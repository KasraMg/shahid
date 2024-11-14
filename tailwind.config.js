/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brown: '#381b00', 
			},
			 
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			fontFamily: {
				neirizi: "NEIRIZI",
				notoNastaliqUrdu: "NotoNastaliqUrdu",
				notoNastaliqUrduBold: "NotoNastaliqUrduBold",
				benazanin: "BNAZANIN",
			},
		},
		screens: {
			xs: { max: "390px" },
			sm: { max: "500px" }, 
			md: { max: "768px" },
			lg: { max: "1024px" },
			xl: { min: "1200px" },
		},
	
	},
	plugins: [require("tailwindcss-animate")],
}; 