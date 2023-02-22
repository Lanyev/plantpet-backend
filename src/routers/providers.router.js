const providersServices = require( '../services/providers.services' )
const routerProviders = require( 'express' ).Router()

routerProviders.get('/', providersServices.getAllProviders)
routerProviders.post('/', providersServices.postProvider)

routerProviders.get('/:id', providersServices.getProviderById)
routerProviders.put('/:id', providersServices.putProvider)
routerProviders.patch('/:id', providersServices.PatchProvider)
routerProviders.delete('/:id', providersServices.deleteProvider)

module.exports = routerProviders