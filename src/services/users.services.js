const usersController = require( '../controllers/users.controllers' )
const {error, success} = require( '../utils/handleResponse' )

const getAllUsers = (req, res) => {
  usersController.findAllUsers()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(err) )
}

const getUserById = (req, res) => {
  const id = req.params.id
  usersController.findUserById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "User not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const postUser = (req, res) => {
  const userObj = req.body
  usersController.createUser(userObj)
    .then( data => res.status(201).json(data)
    )
    .catch( err => res.status(400).json(err) )
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

const getMyUser = ( req, res ) => {
  const id = req.user.id
  usersController.findUserById( id )
    .then( data => success({
        res,
        status: 200,
        message: 'This is your user',
        data
    }) )
    .catch( err => error({
      res,
      status:400,
      message: 'Something bad getting the current user',
      data:err
    }) )
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  PatchUser,
  deleteUser,
  getMyUser
}