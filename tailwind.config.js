
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			'slide-down': 'slide-down 1s ease-out',
  			'scale-in-once': 'scale-in 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards'
  		},
  		keyframes: {
  			'slide-down': {
  				'0%': {
  					transform: 'translateY(-100%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			'scale-in': {
  				'0%': {
  					transform: 'scale(0.5) translate(-120%, -60%)',
  					opacity: '0.33',
  					filter: 'blur(10px)'
  				},
  				'100%': {
  					transform: 'scale(1) translate(0, 0)',
  					opacity: '1',
  					filter: 'blur(0px)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require('tailwindcss-motion'), require("tailwindcss-animate"),require('daisyui')],
    tailwindcss: {},
    autoprefixer: {},
  corePlugins: {
    // Ensure 'transform' is enabled
    transform: true,
  },
}