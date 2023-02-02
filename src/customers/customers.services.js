const customersController = require( './customers.controllers' )

const getAllCustomers = (req, res) => {
  customersController.findAllCustomers()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getCustomerById = (req, res) => {
  customersController.findCustomerById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postCustomer = (req, res) => {
  customersController.createCustomer()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putCustomer = (req, res) => {
  customersController.actualizeCustomer()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchCustomer = (req, res) => {
  customersController.actualizePartialCustomer()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deleteCustomer = (req, res) => {
  customersController.deleteCustomer()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  postCustomer,
  putCustomer,
  PatchCustomer,
  deleteCustomer
}