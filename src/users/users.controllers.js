const {Users} = require( '../models/indexDB' )

const findAllUsers = async (  ) => {
    const data = await Users.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findUserById = async ( id ) => {
    const data = await Users.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createUser = async ( userObj ) => {
    const data = Users.create(userObj)
    return data
}

const updateUser =  async( id, userObj ) => {
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
    deleteUser
}