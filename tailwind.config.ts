import { withUt } from "uploadthing/tw"

export default withUt({
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Brand Colors
				brand: {
					primary: "#E88B84", // Coral pink - used in headings
					secondary: "#1B4B5A", // Dark teal - used in buttons
					light: "#FDF8F7", // Light pink - used in background
					dark: "#15404D", // Darker teal - used in button hover
				},
				// Social Media Colors
				social: {
					facebook: "#4267B2",
					facebook_hover: "#365899",
					google: "#DB4437",
					google_hover: "#C53929",
					twitter: "#1DA1F2",
					twitter_hover: "#1A91DA",
				},
				// Neutral Colors
				neutral: {
					border: "#E5E7EB", // Light gray for borders
					text: {
						primary: "#1F2937", // Dark gray for primary text
						secondary: "#6B7280", // Medium gray for secondary text
						muted: "#9CA3AF", // Lighter gray for muted text
					},
				},
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
});
