const rolsController = require( '../controllers/rols.controllers' )

const getAllRols = (req, res) => {
  rolsController.findAllRols()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(data) )
}

const getRolById = (req, res) => {
  const id = req.params.id
  rolsController.findRolById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Rol not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const postRol = (req, res) => {
  const rolObj = req.body
  rolsController.createRol(rolObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(data) )
}

const putRol = (req, res) => {
  const id = req.params.id
  const rolObj = req.body
  rolsController.actualizeRol( id, rolObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Rol not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const PatchRol = (req, res) => {
  const id = req.params.id
  const rolObj = req.body
  rolsController.actualizePartialRol( id, rolObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Rol not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const deleteRol = (req, res) => {
  const id = req.params.id
  rolsController.deleteRol( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Rol not found"}) 
    )
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