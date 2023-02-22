const productsServices = require( '../services/products.services' )
const routerProducts = require( 'express' ).Router()

routerProducts.get('/', productsServices.getAllProducts)
routerProducts.post('/', productsServices.postProduct)

routerProducts.get('/:id', productsServices.getProductById)
routerProducts.put('/:id', productsServices.putProduct)
routerProducts.patch('/:id', productsServices.PatchProduct)
routerProducts.delete('/:id', productsServices.deleteProduct)

module.exports = routerProducts