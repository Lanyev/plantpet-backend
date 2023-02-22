const usersServices = require( '../services/users.services' )
const routerUsers = require( 'express' ).Router()
const passportJwt = require( '../middlewares/auth.meddleware' )

routerUsers.get('/', passportJwt, usersServices.getAllUsers)
routerUsers.post('/', passportJwt, usersServices.postUser)

routerUsers.get('/me', passportJwt, usersServices.getMyUser)

routerUsers.get('/:id', passportJwt, usersServices.getUserById)
routerUsers.put('/:id', passportJwt, usersServices.putUser)
routerUsers.patch('/:id', passportJwt, usersServices.PatchUser)
routerUsers.delete('/:id', passportJwt, usersServices.deleteUser)

module.exports = routerUsers