const productsController = require( './products.controllers' )

const getAllProducts = (req, res) => {
  productsController.findAllProducts()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(data) )
}

const getProductById = (req, res) => {
  const id = req.params.id
  productsController.findProductById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Product not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const postProduct = (req, res) => {
  const productObj = req.body
  productsController.createProduct(productObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(data) )
}

const putProduct = (req, res) => {
  const id = req.params.id
  const productObj = req.body
  productsController.actualizeProduct( id, productObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Product not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const PatchProduct = (req, res) => {
  const id = req.params.id
  const productObj = req.body
  productsController.actualizePartialProduct( id, productObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Product not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const deleteProduct = (req, res) => {
  const id = req.params.id
  productsController.deleteProduct( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Product not found"}) 
    )
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