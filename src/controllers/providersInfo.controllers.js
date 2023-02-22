const {ProvidersInfos} = require( '../models/index.models' )

const findAllProvidersInfo = async (  ) => {
    const data = await ProvidersInfos.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findProviderInfoById = async ( id ) => {
    const data = await ProvidersInfos.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createProviderInfo = async ( providerInfoObj ) => {
    const data = ProvidersInfos.create(providerInfoObj)
    return data
}

const updateProviderInfo =  async ( id, providerInfoObj ) => {
    const data = ProvidersInfos.update( providerInfoObj, {
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