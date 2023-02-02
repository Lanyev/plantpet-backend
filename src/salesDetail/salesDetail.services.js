const salesDetailController = require( './salesDetail.controllers' )

const getAllSalesDetail = (req, res) => {
  salesDetailController.findAllSalesDetail()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getSaleDetailById = (req, res) => {
  salesDetailController.findSaleDetailById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postSaleDetail = (req, res) => {
  salesDetailController.createSaleDetail()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putSaleDetail = (req, res) => {
  salesDetailController.actualizeSaleDetail()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchSaleDetail = (req, res) => {
  salesDetailController.actualizePartialSaleDetail()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deleteSaleDetail = (req, res) => {
  salesDetailController.deleteSaleDetail()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllSalesDetail,
  getSaleDetailById,
  postSaleDetail,
  putSaleDetail,
  PatchSaleDetail,
  deleteSaleDetail
}