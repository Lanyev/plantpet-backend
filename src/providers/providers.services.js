const providersController = require( './providers.controllers' )

const getAllProviders = (req, res) => {
  providersController.findAllProviders()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getProviderById = (req, res) => {
  providersController.findProviderById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postProvider = (req, res) => {
  providersController.createProvider()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putProvider = (req, res) => {
  providersController.actualizeProvider()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchProvider = (req, res) => {
  providersController.actualizePartialProvider()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deleteProvider = (req, res) => {
  providersController.deleteProvider()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllProviders,
  getProviderById,
  postProvider,
  putProvider,
  PatchProvider,
  deleteProvider
}