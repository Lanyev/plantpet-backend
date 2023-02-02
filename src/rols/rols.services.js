const rolsController = require( './rols.controllers' )

const getAllRols = (req, res) => {
  rolsController.findAllRols()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getRolById = (req, res) => {
  rolsController.findRolById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postRol = (req, res) => {
  rolsController.createRol()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putRol = (req, res) => {
  rolsController.actualizeRol()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchRol = (req, res) => {
  rolsController.actualizePartialRol()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deleteRol = (req, res) => {
  rolsController.deleteRol()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllRols,
  getRolById,
  postRol,
  putRol,
  PatchRol,
  deleteRol
}