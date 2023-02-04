const {Customers} = require( '../models/indexDB' )

const findAllCustomers = async (  ) => {
    const data = await Customers.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findCustomerById = async ( id ) => {
    const data = await Customers.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createCustomer = async ( customerObj ) => {
    const data = Customers.create(customerObj)
    return data
}

const updateCustomer =  async ( id, customerObj ) => {
    const data = Customers.update( customerObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteCustomer = async ( id ) => {
    const data  = Customers.destroy( id )
    return await data
}

module.exports = {
    findAllCustomers,
    findCustomerById,
    createCustomer,
    updateCustomer,
    updateCustomer,
    deleteCustomer
}





