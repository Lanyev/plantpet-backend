const usersServices = require( './users.services' )
const routerUsers = require( 'express' ).Router()

routerUsers.get('/', usersServices.getAllUsers)
routerUsers.post('/', usersServices.postUser)

routerUsers.get('/:id', usersServices.getUserById)
routerUsers.put('/:id', usersServices.putUser)
routerUsers.patch('/:id', usersServices.PatchUser)
routerUsers.delete('/:id', usersServices.deleteUser)

module.exports = routerUsers