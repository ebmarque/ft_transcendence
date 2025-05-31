// Import the framework and instantiate it
const log = require('pino')({ level: 'info' })
const fastify = require('fastify')({ loggerInstance: log })

// Declare a route
fastify.get('/', async function handler(request, reply) {
	fastify.log.info("this is a massage to confirm the pino-pretty is working fine!");
	return { hello: 'world' }
})

// Run the server!
const start = async () => {
	try {
		fastify.listen({
			port: 3000,
			host: '0.0.0.0'
		})
	} catch (err) {
		fastify.log.error("Could not initiate the server!");
	}
}

start();