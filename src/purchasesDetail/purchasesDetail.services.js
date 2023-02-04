const purchasesDetailController = require( './purchasesDetail.controllers' )

const getAllPurchasesDetail = (req, res) => {
  purchasesDetailController.findAllPurchasesDetail()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(data) )
}

const getPurchaseDetailById = (req, res) => {
  const id = req.params.id
  purchasesDetailController.findPurchaseDetailById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase detail not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const postPurchaseDetail = (req, res) => {
  const purchaseDetailObj = req.body
  purchasesDetailController.createPurchaseDetail(purchaseDetailObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(data) )
}

const putPurchaseDetail = (req, res) => {
  const id = req.params.id
  const purchaseDetailObj = req.body
  purchasesDetailController.actualizePurchaseDetail( id, purchaseDetailObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase detail not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const PatchPurchaseDetail = (req, res) => {
  const id = req.params.id
  const purchaseDetailObj = req.body
  purchasesDetailController.actualizePartialPurchaseDetail( id, purchaseDetailObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase detail not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const deletePurchaseDetail = (req, res) => {
  const id = req.params.id
  purchasesDetailController.deletePurchaseDetail( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase detail not found"}) 
    )
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