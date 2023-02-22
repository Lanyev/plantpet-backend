const {SalesDetails} = require( '../models/index.models' )

const findAllSalesDetail = async (  ) => {
    const data = await SalesDetails.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findSaleDetailById = async ( id ) => {
    const data = await SalesDetails.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createSaleDetail = async ( saleDetailObj ) => {
    const data = SalesDetails.create(saleDetailObj)
    return data
}

const updateSaleDetail =  async ( id, saleDetailObj ) => {
    const data = SalesDetails.update( saleDetailObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteSaleDetail = async ( id ) => {
    const data  = SalesDetails.destroy( id )
    return await data
}

module.exports = {
    findAllSalesDetail,
    findSaleDetailById,
    createSaleDetail,
    updateSaleDetail,
    deleteSaleDetail
}