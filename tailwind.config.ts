import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				/* === CORE DESIGN SYSTEM COLORS === */
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* === PREMIUM BRAND PALETTE === */
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
					glow: 'hsl(var(--success-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				
				/* === INTERFACE ELEMENTS === */
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					glass: 'hsl(var(--card-glass))'
				},
				
				/* === AI PERSONALITY COLORS === */
				friend: {
					DEFAULT: 'hsl(25 95% 70%)',
					light: 'hsl(25 95% 80%)',
					dark: 'hsl(25 85% 60%)'
				},
				professional: {
					DEFAULT: 'hsl(222 50% 40%)',
					light: 'hsl(222 50% 60%)', 
					dark: 'hsl(222 50% 20%)'
				},
				coach: {
					DEFAULT: 'hsl(159 80% 42%)',
					light: 'hsl(159 80% 52%)',
					dark: 'hsl(159 80% 32%)'
				},
				
				/* === LEGACY SIDEBAR (keeping for compatibility) === */
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			
			/* === PREMIUM GRADIENTS === */
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-success': 'var(--gradient-success)',
				'gradient-champagne': 'var(--gradient-champagne)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-friend': 'var(--gradient-friend)',
				'gradient-professional': 'var(--gradient-professional)',
				'gradient-coach': 'var(--gradient-coach)'
			},
			
			/* === PREMIUM SHADOWS === */
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glass': 'var(--shadow-glass)',
				'glow': 'var(--shadow-glow)',
				'celebration': 'var(--shadow-celebration)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			/* === PREMIUM KEYFRAMES === */
			keyframes: {
				/* Legacy accordion animations */
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				
				/* Liquid Intelligence Animations */
				'liquid-float': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'50%': { transform: 'translateY(-4px) scale(1.02)' }
				},
				'confidence-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 0 0 hsla(var(--success) / 0.7)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 0 8px hsla(var(--success) / 0)',
						transform: 'scale(1.05)'
					}
				},
				'celebration-burst': {
					'0%': { 
						transform: 'scale(0.8) rotate(0deg)',
						opacity: '0'
					},
					'50%': { 
						transform: 'scale(1.2) rotate(180deg)',
						opacity: '1'
					},
					'100%': { 
						transform: 'scale(1) rotate(360deg)',
						opacity: '1'
					}
				},
				'avatar-breathe': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'brightness(1)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						filter: 'brightness(1.1)'
					}
				},
				'progress-flow': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(400%)' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			
			/* === PREMIUM ANIMATIONS === */
			animation: {
				/* Legacy animations */
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				/* Liquid Intelligence Animations */
				'liquid-float': 'liquid-float 4s ease-in-out infinite',
				'confidence-pulse': 'confidence-pulse 2s ease-in-out infinite',
				'celebration-burst': 'celebration-burst 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'avatar-breathe': 'avatar-breathe 3s ease-in-out infinite',
				'progress-flow': 'progress-flow 2s ease-in-out infinite',
				
				/* Interface Animations */
				'fade-in-up': 'fade-in-up 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'fade-in': 'fade-in-up 0.3s ease-out',
				'enter': 'fade-in-up 0.3s ease-out, scale-in 0.2s ease-out'
			},
			
			/* === PREMIUM TRANSITIONS === */
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
