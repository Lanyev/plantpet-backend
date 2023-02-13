const customersInfoController = require( './customersInfo.controllers' )

const getAllCustomersInfo = (req, res) => {
  customersInfoController.findAllCustomersInfo()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(err) )
}

const getCustomerInfoById = (req, res) => {
  const id = req.params.id
  customersInfoController.findCustomerInfoById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Customer information not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const postCustomerInfo = (req, res) => {
  const CustomerInfoObj = req.body
  customersInfoController.createCustomerInfo(CustomerInfoObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(err) )
}

const putCustomerInfo = (req, res) => {
  const id = req.params.id
  const CustomerInfoObj = req.body
  customersInfoController.updateCustomerInfo( id, CustomerInfoObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Customer information not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const PatchCustomerInfo = (req, res) => {
  const id = req.params.id
  const CustomerInfoObj = req.body
  customersInfoController.updateCustomerInfo( id, CustomerInfoObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Customer information not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const deleteCustomerInfo = (req, res) => {
  const id = req.params.id
  customersInfoController.deleteCustomerInfo( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Customer information not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

module.exports = {
  getAllCustomersInfo,
  getCustomerInfoById,
  postCustomerInfo,
  putCustomerInfo,
  PatchCustomerInfo,
  deleteCustomerInfo
}