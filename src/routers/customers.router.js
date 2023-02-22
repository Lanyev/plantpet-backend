const customersServices = require( '../services/customers.services' )
const routerCustomers = require( 'express' ).Router()

routerCustomers.get('/', customersServices.getAllCustomers)
routerCustomers.post('/', customersServices.postCustomer)

routerCustomers.get('/:id', customersServices.getCustomerById)
routerCustomers.put('/:id', customersServices.putCustomer)
routerCustomers.patch('/:id', customersServices.PatchCustomer)
routerCustomers.delete('/:id', customersServices.deleteCustomer)

module.exports = routerCustomers