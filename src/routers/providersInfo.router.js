const ProvidersInfoServices = require( '../services/providersInfo.services' )
const routerProvidersInfo = require( 'express' ).Router()

routerProvidersInfo.get('/', ProvidersInfoServices.getAllProvidersInfo)
routerProvidersInfo.post('/', ProvidersInfoServices.postProviderInfo)

routerProvidersInfo.get('/:id', ProvidersInfoServices.getProviderInfoById)
routerProvidersInfo.put('/:id', ProvidersInfoServices.putProviderInfo)
routerProvidersInfo.patch('/:id', ProvidersInfoServices.PatchProviderInfo)
routerProvidersInfo.delete('/:id', ProvidersInfoServices.deleteProviderInfo)

module.exports = routerProvidersInfo