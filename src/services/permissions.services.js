const permissionsController = require( '../controllers/permissions.controllers' )

const getAllPermissions = (req, res) => {
  permissionsController.findAllPermissions()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(err) )
}

const getPermissionById = (req, res) => {
  const id = req.params.id
  permissionsController.findPermissionById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Permission not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const postPermission = (req, res) => {
  const permissionObj = req.body
  permissionsController.createPermission(permissionObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(err) )
}

const putPermission = (req, res) => {
  const id = req.params.id
  const permissionObj = req.body
  permissionsController.actualizePermission( id, permissionObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Permission not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const PatchPermission = (req, res) => {
  const id = req.params.id
  const permissionObj = req.body
  permissionsController.actualizePartialPermission( id, permissionObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Permission not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const deletePermission = (req, res) => {
  const id = req.params.id
  permissionsController.deletePermission( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Permission not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

module.exports = {
  getAllPermissions,
  getPermissionById,
  postPermission,
  putPermission,
  PatchPermission,
  deletePermission
}