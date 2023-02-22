const customersController = require( '../controllers/customers.controllers' )

const getAllCustomers = (req, res) => {
  customersController.findAllCustomers()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(err) )
}

const getCustomerById = (req, res) => {
  const id = req.params.id
  customersController.findCustomerById(id)
  .then( data => data ?
    res.status(200).json(data):
    res.status(404).json({message: "Customer not found"}) 
  )
    .catch( err => res.status(400).json(err) )
}

const postCustomer = (req, res) => {
  const customerObj = req.body
  customersController.createCustomer(customerObj)
    .then( data => res.status(201).json(data) )
    .catch( err => res.status(400).json(err) )
}

const putCustomer = (req, res) => {
  const id = req.params.id
  const customerObj = req.body
  customersController.updateCustomer( id, customerObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Customer not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const PatchCustomer = (req, res) => {
  const id = req.params.id
  const customerObj = req.body
  customersController.updateCustomer( id, customerObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Customer not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const deleteCustomer = (req, res) => {
  const id = req.params.id
  customersController.deleteCustomer( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Customer not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  postCustomer,
  putCustomer,
  PatchCustomer,
  deleteCustomer
}