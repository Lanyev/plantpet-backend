const purchasesServices = require( './purchases.services' )
const routerPurchases = require( 'express' ).Router()

routerPurchases.get('/', purchasesServices.getAllPurchases)
routerPurchases.post('/', purchasesServices.postPurchase)

routerPurchases.get('/:id', purchasesServices.getPurchaseById)
routerPurchases.put('/:id', purchasesServices.putPurchase)
routerPurchases.patch('/:id', purchasesServices.PatchPurchase)
routerPurchases.delete('/:id', purchasesServices.deletePurchase)

module.exports = routerPurchases