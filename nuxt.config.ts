// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo'],
	vite: {
		vue: {
			script: {
				propsDestructure: true,
			},
		},
	},
	// devtools: { enabled: true },
})
