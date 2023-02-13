const {ProvidersInfo} = require( '../models/indexDB' )

const findAllProvidersInfo = async (  ) => {
    const data = await ProvidersInfo.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findProviderInfoById = async ( id ) => {
    const data = await ProvidersInfo.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createProviderInfo = async ( providerInfoObj ) => {
    const data = ProvidersInfo.create(providerInfoObj)
    return data
}

const updateProviderInfo =  async ( id, providerInfoObj ) => {
    const data = ProvidersInfo.update( providerInfoObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteProviderInfo = async ( id ) => {
    return await table 
}

module.exports = {
    findAllProvidersInfo,
    findProviderInfoById,
    createProviderInfo,
    updateProviderInfo,
    deleteProviderInfo
}