const salesDetailController = require( '../controllers/salesDetail.controllers' )

const getAllSalesDetail = (req, res) => {
  salesDetailController.findAllSalesDetail()
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Sale detail not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const getSaleDetailById = (req, res) => {
  const id = req.params.id
  salesDetailController.findSaleDetailById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Sale detail not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const postSaleDetail = (req, res) => {
  const id = req.params.id
  const saleDetailObj = req.body
  salesDetailController.createSaleDetail(saleDetailObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(err) )
}

const putSaleDetail = (req, res) => {
  const id = req.params.id
  const saleDetailObj = req.body
  salesDetailController.actualizeSaleDetail( id, saleDetailObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Sale detail not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const PatchSaleDetail = (req, res) => {
  const id = req.params.id
  const saleDetailObj = req.body
  salesDetailController.actualizePartialSaleDetail( id, saleDetailObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Sale detail not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const deleteSaleDetail = (req, res) => {
  const id = req.params.id
  salesDetailController.deleteSaleDetail( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Sale detail not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

module.exports = {
  getAllSalesDetail,
  getSaleDetailById,
  postSaleDetail,
  putSaleDetail,
  PatchSaleDetail,
  deleteSaleDetail
}