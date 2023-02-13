const usersController = require( './users.controllers' )

const getAllUsers = (req, res) => {
  usersController.findAllUsers()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(data) )
}

const getUserById = (req, res) => {
  const id = req.params.id
  usersController.findUserById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "User not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const postUser = (req, res) => {
  const userObj = req.body
  usersController.createUser(userObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(data) )
}

const putUser = (req, res) => {
  const id = req.params.id
  const userObj = req.body
  usersController.actualizeUser( id, userObj )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "User not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const PatchUser = (req, res) => {
  const id = req.params.id
  const userObj = req.body
  usersController.actualizePartialUser( id, userObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "User not found"}) 
    )
    .catch( err => res.status(400).json(data) )
}

const deleteUser = (req, res) => {
  const id = req.params.id
  usersController.deleteUser( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "User not found"}) 
    )
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