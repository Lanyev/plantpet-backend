const salesServices = require( '../services/sales.services' )
const routerSales = require( 'express' ).Router()

routerSales.get('/', salesServices.getAllSales)
routerSales.post('/', salesServices.postSale)

routerSales.get('/:id', salesServices.getSaleById)
routerSales.put('/:id', salesServices.putSale)
routerSales.patch('/:id', salesServices.PatchSale)
routerSales.delete('/:id', salesServices.deleteSale)

module.exports = routerSales