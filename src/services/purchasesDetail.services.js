const purchasesDetailController = require( '../controllers/purchasesDetail.controllers' )

const getAllPurchasesDetail = (req, res) => {
  purchasesDetailController.findAllPurchasesDetail()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(err) )
}

const getPurchaseDetailById = (req, res) => {
  const id = req.params.id
  purchasesDetailController.findPurchaseDetailById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase detail not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const postPurchaseDetail = (req, res) => {
  const purchaseDetailObj = req.body
  purchasesDetailController.createPurchaseDetail(purchaseDetailObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(err) )
}

const putPurchaseDetail = (req, res) => {
  const id = req.params.id
  const purchaseDetailObj = req.body
  purchasesDetailController.updatePurchaseDetail( id, purchaseDetailObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase detail not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const PatchPurchaseDetail = (req, res) => {
  const id = req.params.id
  const purchaseDetailObj = req.body
  purchasesDetailController.updatePurchaseDetail( id, purchaseDetailObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase detail not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const deletePurchaseDetail = (req, res) => {
  const id = req.params.id
  purchasesDetailController.deletePurchaseDetail( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Purchase detail not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

module.exports = {
  getAllPurchasesDetail,
  getPurchaseDetailById,
  postPurchaseDetail,
  putPurchaseDetail,
  PatchPurchaseDetail,
  deletePurchaseDetail
}