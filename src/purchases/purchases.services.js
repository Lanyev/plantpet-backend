const PurchasesController = require( './Purchases.controllers' )

const getAllPurchases = (req, res) => {
  PurchasesController.findAllPurchases()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getPurchaseById = (req, res) => {
  PurchasesController.findPurchaseById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postPurchase = (req, res) => {
  PurchasesController.createPurchase()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putPurchase = (req, res) => {
  PurchasesController.actualizePurchase()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchPurchase = (req, res) => {
  PurchasesController.actualizePartialPurchase()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deletePurchase = (req, res) => {
  PurchasesController.deletePurchase()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllPurchases,
  getPurchaseById,
  postPurchase,
  putPurchase,
  PatchPurchase,
  deletePurchase
}