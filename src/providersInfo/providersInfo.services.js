const providersInfoController = require( './providersInfo.controllers' )

const getAllProvidersInfo = (req, res) => {
  providersInfoController.findAllProvidersInfo()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getProviderInfoById = (req, res) => {
  providersInfoController.findProviderInfoById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postProviderInfo = (req, res) => {
  providersInfoController.createProviderInfo()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putProviderInfo = (req, res) => {
  providersInfoController.actualizeProviderInfo()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchProviderInfo = (req, res) => {
  providersInfoController.actualizePartialProviderInfo()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deleteProviderInfo = (req, res) => {
  providersInfoController.deleteProviderInfo()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllProvidersInfo,
  getProviderInfoById,
  postProviderInfo,
  putProviderInfo,
  PatchProviderInfo,
  deleteProviderInfo
}