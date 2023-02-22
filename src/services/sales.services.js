const salesController = require( '../controllers/sales.controllers' )

const getAllSales = (req, res) => {
  salesController.findAllSales()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(data) )
}

const getSaleById = (req, res) => {
  const id = req.params.id
  salesController.findSaleById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Sale not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const postSale = (req, res) => {
  const saleObj = req.body
  salesController.createSale(saleObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(data) )
}

const putSale = (req, res) => {
  const id = req.params.id
  const saleObj = req.body
  salesController.actualizeSale( id, saleObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Sale not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const PatchSale = (req, res) => {
  const id = req.params.id
  const saleObj = req.body
  salesController.actualizePartialSale( id, saleObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Sale not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const deleteSale = (req, res) => {
  const id = req.params.id
  salesController.deleteSale( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Sale not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllSales,
  getSaleById,
  postSale,
  putSale,
  PatchSale,
  deleteSale
}