const customersInfoController = require( './customersInfo.controllers' )

const getAllCustomersInfo = (req, res) => {
  customersInfoController.findAllCustomersInfo()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getCustomerInfoById = (req, res) => {
  customersInfoController.findCustomerInfoById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postCustomerInfo = (req, res) => {
  customersInfoController.createCustomerInfo()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putCustomerInfo = (req, res) => {
  customersInfoController.actualizeCustomerInfo()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchCustomerInfo = (req, res) => {
  customersInfoController.actualizePartialCustomerInfo()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deleteCustomerInfo = (req, res) => {
  customersInfoController.deleteCustomerInfo()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllCustomersInfo,
  getCustomerInfoById,
  postCustomerInfo,
  putCustomerInfo,
  PatchCustomerInfo,
  deleteCustomerInfo
}