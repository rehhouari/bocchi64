import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		UnoCSS({
			injectReset: true
		}),
		VitePWA({
			manifest: {
				name: "Bocchi64",
				short_name: "Bocchi64",
				theme_color: "#4061A0",
				icons: [
					{
						"src": "favicons/favicon-72x72.png",
						"type": "image/png",
						"sizes": "72x72",
						"purpose": "any"
					},
					{
						"src": "favicons/favicon-96x96.png",
						"type": "image/png",
						"sizes": "96x96",
						"purpose": "any"
					},
					{
						"src": "favicons/favicon-128x128.png",
						"type": "image/png",
						"sizes": "128x128",
						"purpose": "any"
					},
					{
						"src": "favicons/favicon-144x144.png",
						"type": "image/png",
						"sizes": "144x144",
						"purpose": "any"
					},
					{
						"src": "favicons/favicon-152x152.png",
						"type": "image/png",
						"sizes": "152x152",
						"purpose": "any"
					},
					{
						"src": "favicons/favicon-192x192.png",
						"type": "image/png",
						"sizes": "192x192",
						"purpose": "any"
					},
					{
						"src": "favicons/favicon-384x384.png",
						"type": "image/png",
						"sizes": "384x384",
						"purpose": "any"
					},
					{
						"src": "favicons/favicon-512x512.png",
						"type": "image/png",
						"sizes": "512x512",
						"purpose": "any"
					}
				]
			}
		})
	],
})