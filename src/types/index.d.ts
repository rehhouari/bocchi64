import type { Alpine, AlpineComponent } from 'alpinejs'

declare global {
	interface Window {
		Alpine: Alpine
	}
}
