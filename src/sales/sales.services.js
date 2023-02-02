const salesController = require( './Sales.controllers' )

const getAllSales = (req, res) => {
  salesController.findAllSales()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getSaleById = (req, res) => {
  salesController.findSaleById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postSale = (req, res) => {
  salesController.createSale()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putSale = (req, res) => {
  salesController.actualizeSale()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchSale = (req, res) => {
  salesController.actualizePartialSale()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deleteSale = (req, res) => {
  salesController.deleteSale()
    .then( data => res.status(200).json({data}) )
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