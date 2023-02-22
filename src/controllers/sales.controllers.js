const {Sales} = require( '../models/index.models' )

const findAllSales = async (  ) => {
    const data = await Sales.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findSaleById = async ( id ) => {
    const data = await Sales.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createSale = async ( saleObj ) => {
    const data = Sales.create(saleObj)
    return data
}

const updateSale =  async ( id, saleObj ) => {
    const data = Sales.update( saleObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteSale = async ( id ) => {
    const data  = Sales.destroy( id )
    return await data
}

module.exports = {
    findAllSales,
    findSaleById,
    createSale,
    updateSale,
    deleteSale
}