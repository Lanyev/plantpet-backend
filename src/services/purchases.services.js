const PurchasesController = require( '../controllers/purchases.controllers' )

const getAllPurchases = (req, res) => {
  PurchasesController.findAllPurchases()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(data) )
}

const getPurchaseById = (req, res) => {
  const id = req.params.id
  PurchasesController.findPurchaseById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const postPurchase = (req, res) => {
  const PurchaseObj = req.body
  PurchasesController.createPurchase(PurchaseObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(data) )
}

const putPurchase = (req, res) => {
  const id = req.params.id
  const PurchaseObj = req.body
  PurchasesController.actualizePurchase( id, PurchaseObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const PatchPurchase = (req, res) => {
  const id = req.params.id
  const PurchaseObj = req.body
  PurchasesController.actualizePartialPurchase( id, PurchaseObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const deletePurchase = (req, res) => {
  const id = req.params.id
  PurchasesController.deletePurchase( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase not found"}) 
    )
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