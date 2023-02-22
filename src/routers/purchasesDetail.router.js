const purchasesDetailServices = require( '../services/purchasesDetail.services' )
const routerPurchasesDetail = require( 'express' ).Router()

routerPurchasesDetail.get('/', purchasesDetailServices.getAllPurchasesDetail)
routerPurchasesDetail.post('/', purchasesDetailServices.postPurchaseDetail)

routerPurchasesDetail.get('/:id', purchasesDetailServices.getPurchaseDetailById)
routerPurchasesDetail.put('/:id', purchasesDetailServices.putPurchaseDetail)
routerPurchasesDetail.patch('/:id', purchasesDetailServices.PatchPurchaseDetail)
routerPurchasesDetail.delete('/:id', purchasesDetailServices.deletePurchaseDetail)

module.exports = routerPurchasesDetail