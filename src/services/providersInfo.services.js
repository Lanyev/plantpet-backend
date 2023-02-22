const providersInfoController = require( '../controllers/providersInfo.controllers' )

const getAllProvidersInfo = (req, res) => {
  providersInfoController.findAllProvidersInfo()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(err) )
}

const getProviderInfoById = (req, res) => {
  const id = req.params.id
  providersInfoController.findProviderInfoById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Provider information not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const postProviderInfo = (req, res) => {
  const providerInfoObj = req.body
  providersInfoController.createProviderInfo(providerInfoObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(err) )
}

const putProviderInfo = (req, res) => {
  const id = req.params.id
  const providerInfoObj = req.body
  providersInfoController.updateProviderInfo( id, providerInfoObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Provider information not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const PatchProviderInfo = (req, res) => {
  const id = req.params.id
  const providerInfoObj = req.body
  providersInfoController.updateProviderInfo( id, providerInfoObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Provider information not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const deleteProviderInfo = (req, res) => {
  const id = req.params.id
  providersInfoController.deleteProviderInfo( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Provider information not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

module.exports = {
  getAllProvidersInfo,
  getProviderInfoById,
  postProviderInfo,
  putProviderInfo,
  PatchProviderInfo,
  deleteProviderInfo
}