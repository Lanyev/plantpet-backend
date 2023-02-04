const {Permissions} = require( '../models/indexDB' )

const findAllPermissions = async (  ) => {
    const data = await Permissions.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findPermissionById = async ( id ) => {
    const data = await Permissions.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createPermission = async ( permissionObj ) => {
    const data = Permissions.create(permissionObj)
    return data
}

const updatePermission =  async ( id, permissionObj ) => {
    const data = Permissions.update( permissionObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}
const deletePermission = async ( id ) => {
    const data  = Permissions.destroy( id )
    return await data
}

module.exports = {
    findAllPermissions,
    findPermissionById,
    createPermission,
    updatePermission,
    deletePermission
}