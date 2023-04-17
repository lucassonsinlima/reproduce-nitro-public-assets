// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	nitro: {
		publicAssets:[
			{
				baseURL: 'images',
				dir: "public/images"
			}
		]
	}
})
