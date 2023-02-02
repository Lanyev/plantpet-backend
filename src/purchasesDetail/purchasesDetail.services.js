const purchasesDetailController = require( './purchasesDetail.controllers' )

const getAllPurchasesDetail = (req, res) => {
  purchasesDetailController.findAllPurchasesDetail()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getPurchaseDetailById = (req, res) => {
  purchasesDetailController.findPurchaseDetailById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postPurchaseDetail = (req, res) => {
  purchasesDetailController.createPurchaseDetail()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putPurchaseDetail = (req, res) => {
  purchasesDetailController.actualizePurchaseDetail()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchPurchaseDetail = (req, res) => {
  purchasesDetailController.actualizePartialPurchaseDetail()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deletePurchaseDetail = (req, res) => {
  purchasesDetailController.deletePurchaseDetail()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllPurchasesDetail,
  getPurchaseDetailById,
  postPurchaseDetail,
  putPurchaseDetail,
  PatchPurchaseDetail,
  deletePurchaseDetail
}