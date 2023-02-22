const providersController = require( '../controllers/providers.controllers' )

const getAllProviders = (req, res) => {
  providersController.findAllProviders()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(err) )
}

const getProviderById = (req, res) => {
  const id = req.params.id
  providersController.findProviderById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Provider not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const postProvider = (req, res) => {
  const providerObj = req.body
  providersController.createProvider(providerObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(err) )
}

const putProvider = (req, res) => {
  const id = req.params.id
  const providerObj = req.body
  providersController.actualizeProvider( id, providerObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Provider not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const PatchProvider = (req, res) => {
  const id = req.params.id
  const providerObj = req.body
  providersController.actualizePartialProvider( id, providerObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Provider not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const deleteProvider = (req, res) => {
  const id = req.params.id
  providersController.deleteProvider( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Provider not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

module.exports = {
  getAllProviders,
  getProviderById,
  postProvider,
  putProvider,
  PatchProvider,
  deleteProvider
}