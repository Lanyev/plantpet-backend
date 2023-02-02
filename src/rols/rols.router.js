const rolsServices = require( './rols.services' )
const routerRols = require( 'express' ).Router()

routerRols.get('/', rolsServices.getAllRols)
routerRols.post('/', rolsServices.postRol)

routerRols.get('/:id', rolsServices.getRolById)
routerRols.put('/:id', rolsServices.putRol)
routerRols.patch('/:id', rolsServices.PatchRol)
routerRols.delete('/:id', rolsServices.deleteRol)

module.exports = routerRols