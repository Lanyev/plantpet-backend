const permissionsController = require( './Permissions.controllers' )

const getAllPermissions = (req, res) => {
  permissionsController.findAllPermissions()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const getPermissionById = (req, res) => {
  permissionsController.findPermissionById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const postPermission = (req, res) => {
  permissionsController.createPermission()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const putPermission = (req, res) => {
  permissionsController.actualizePermission()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const PatchPermission = (req, res) => {
  permissionsController.actualizePartialPermission()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const deletePermission = (req, res) => {
  permissionsController.deletePermission()
    .then( data => res.status(200).json({data}) )
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