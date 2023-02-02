const categoriesServices = require( './categories.services' )
const routerCategories = require( 'express' ).Router()

routerCategories.get('/', categoriesServices.getAllCategories)
routerCategories.post('/', categoriesServices.postCategory)

routerCategories.get('/:id', categoriesServices.getCategoryById)
routerCategories.put('/:id', categoriesServices.putCategory)
routerCategories.patch('/:id', categoriesServices.PatchCategory)
routerCategories.delete('/:id', categoriesServices.deleteCategory)

module.exports = routerCategories