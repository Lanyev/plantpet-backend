const salesDetailServices = require( './salesDetail.services' )
const routerSalesDetail = require( 'express' ).Router()

routerSalesDetail.get('/', salesDetailServices.getAllSalesDetail)
routerSalesDetail.post('/', salesDetailServices.postSaleDetail)

routerSalesDetail.get('/:id', salesDetailServices.getSaleDetailById)
routerSalesDetail.put('/:id', salesDetailServices.putSaleDetail)
routerSalesDetail.patch('/:id', salesDetailServices.PatchSaleDetail)
routerSalesDetail.delete('/:id', salesDetailServices.deleteSaleDetail)

module.exports = routerSalesDetail