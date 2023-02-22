const {Users, Rols} = require( '../models/index.models' )
const { hashPassword } = require('../utils/crypto')

const findAllUsers = async (  ) => {
    const data = await Users.findAll({
        attributes:[ 'firstName', 'lastName', 'email', 'phone'],
        include:{
            model: Rols,
            attributes:["name"]
        }
    })
    return data
}

const findUserByEmail = async ( email ) => {
    const data = await Users.findOne({
        where:{
            email,
        }
    })
    return data
}

const findUserById = async ( id ) => {
    const data = await Users.findOne({
        where:{
            id,
        }
    })
    return data
}

const createUser = async ( userObj ) => {
    userObj.password = hashPassword(userObj.password)
    const data = Users.create(userObj)
    return data
}

const updateUser =  async( id, userObj ) => {
    userObj.password = hashPassword(userObj.password)
    const data = Users.update( userObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteUser = async ( id ) => {
    const data  = Users.destroy( id )
    return await data
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    findUserByEmail
}