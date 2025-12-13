/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F9F9F7", // Alabaster/Off-white
                primary: "#2D2D2D",    // Soft Charcoal
                accent: {
                    DEFAULT: "#708238", // Muted Olive
                    blue: "#6A7B9C",    // Slate Blue
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            keyframes: {
                'slide-in': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'slide-out': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-out': {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                'ken-burns': {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'expand-width': {
                    '0%': { width: '0' },
                    '100%': { width: '5rem' },
                },
                'bounce-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            animation: {
                'slide-in': 'slide-in 0.3s ease-out',
                'slide-out': 'slide-out 0.3s ease-in',
                'fade-in': 'fade-in 1s ease-out',
                'fade-out': 'fade-out 0.2s ease-in',
                'ken-burns': 'ken-burns 20s ease-out infinite alternate',
                'slide-up': 'slide-up 0.6s ease-out forwards',
                'expand-width': 'expand-width 1s ease-out',
                'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
