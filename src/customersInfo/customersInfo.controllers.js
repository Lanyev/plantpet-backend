const {CustomersInfo} = require( '../models/indexDB' )

const findAllCustomersInfo = async (  ) => {
    const data = await CustomersInfo.findAll({
        where:{
        }
    })
    return data
}

const findCustomerInfoById = async ( id ) => {
    const data = await CustomersInfo.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createCustomerInfo = async ( customerInfoObj ) => {
    const data = CustomersInfo.create(customerInfoObj)
    return data
}

const updateCustomerInfo =  async ( id, customerInfoObj ) => {
    const data = CustomersInfo.update( customerInfoObj, {
        where:{
            id
        }
    } )
    return 
}

const deleteCustomerInfo = async ( id ) => {
    const data  = CustomersInfo.destroy( id )
    return await data
}

module.exports = {
    findAllCustomersInfo,
    findCustomerInfoById,
    createCustomerInfo,
    updateCustomerInfo,
    deleteCustomerInfo
}