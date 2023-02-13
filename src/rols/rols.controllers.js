const {Rols} = require( '../models/indexDB' )

const findAllRols = async (  ) => {
    const data = await Rols.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findRolById = async ( id ) => {
    const data = await Rols.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createRol = async ( rolObj ) => {
    const data = Rols.create(rolObj)
    return data
}

const updateRol =  async ( id, rolObj ) => {
    const data = Rols.update( rolObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteRol = async ( id ) => {
    const data  = Rols.destroy( id )
    return await data
}

module.exports = {
    findAllRols,
    findRolById,
    createRol,
    updateRol,
    deleteRol
}