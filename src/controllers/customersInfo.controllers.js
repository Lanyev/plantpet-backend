const {customersInfos} = require( '../models/index.models' )

const findAllCustomersInfo = async (  ) => {
    const data = await customersInfos.findAll()
    return data
}

const findCustomerInfoById = async ( id ) => {
    const data = await customersInfos.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createCustomerInfo = async ( customerInfoObj ) => {
    const data = await customersInfos.create(customerInfoObj)
    return data
}

const updateCustomerInfo =  async ( id, customerInfoObj ) => {
    const data = await customersInfos.update( customerInfoObj, {
        where:{
            id
        }
    } )
    return data[0]
}

const deleteCustomerInfo = async ( id ) => {
    const data  = await customersInfos.destroy( id )
    return data
}

module.exports = {
    findAllCustomersInfo,
    findCustomerInfoById,
    createCustomerInfo,
    updateCustomerInfo,
    deleteCustomerInfo
}