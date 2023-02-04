const {Providers} = require( '../models/indexDB' )

const findAllProviders = async (  ) => {
    const data = await Providers.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findProviderById = async ( id ) => {
    const data = await Providers.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createProvider = async ( providerObj ) => {
    const data = Providers.create(providerObj)
    return data
}

const updateProvider =  async ( id, providerObj ) => {
    const data = Providers.update( providerObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteProvider = async ( id ) => {
    const data  = Providers.destroy( id )
    return await data
}

module.exports = {
    findAllProviders,
    findProviderById,
    createProvider,
    updateProvider,
    deleteProvider
}