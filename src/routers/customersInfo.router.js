const customersInfoServices = require( '../services/customersInfo.services' )
const routerCustomersInfo = require( 'express' ).Router()

routerCustomersInfo.get('/', customersInfoServices.getAllCustomersInfo)
routerCustomersInfo.post('/', customersInfoServices.postCustomerInfo)

routerCustomersInfo.get('/:id', customersInfoServices.getCustomerInfoById)
routerCustomersInfo.put('/:id', customersInfoServices.putCustomerInfo)
routerCustomersInfo.patch('/:id', customersInfoServices.PatchCustomerInfo)
routerCustomersInfo.delete('/:id', customersInfoServices.deleteCustomerInfo)

module.exports = routerCustomersInfo