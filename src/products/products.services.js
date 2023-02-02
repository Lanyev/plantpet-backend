const productsController = require( './products.controllers' )

const getAllProducts = (req, res) => {
  productsController.findAllProducts()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getProductById = (req, res) => {
  productsController.findProductById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postProduct = (req, res) => {
  productsController.createProduct()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putProduct = (req, res) => {
  productsController.actualizeProduct()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchProduct = (req, res) => {
  productsController.actualizePartialProduct()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deleteProduct = (req, res) => {
  productsController.deleteProduct()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  PatchProduct,
  deleteProduct
}