const permissionsServices = require( './permissions.services' )
const routerPermissions = require( 'express' ).Router()

routerPermissions.get('/', permissionsServices.getAllPermissions)
routerPermissions.post('/', permissionsServices.postPermission)

routerPermissions.get('/:id', permissionsServices.getPermissionById)
routerPermissions.put('/:id', permissionsServices.putPermission)
routerPermissions.patch('/:id', permissionsServices.PatchPermission)
routerPermissions.delete('/:id', permissionsServices.deletePermission)

module.exports = routerPermissions