const usersController = require( './users.controllers' )

const getAllUsers = (req, res) => {
  usersController.findAllUsers()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const getUserById = (req, res) => {
  usersController.findUserById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const postUser = (req, res) => {
  usersController.createUser()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const putUser = (req, res) => {
  usersController.actualizeUser()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const PatchUser = (req, res) => {
  usersController.actualizePartialUser()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

const deleteUser = (req, res) => {
  usersController.deleteUser()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(data) )
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  PatchUser,
  deleteUser
}