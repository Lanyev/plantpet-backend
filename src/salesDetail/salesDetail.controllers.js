const {SalesDetail} = require( '../models/indexDB' )

const findAllSalesDetail = async (  ) => {
    const data = await SalesDetail.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findSaleDetailById = async ( id ) => {
    const data = await SalesDetail.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createSaleDetail = async ( saleDetailObj ) => {
    const data = SalesDetail.create(saleDetailObj)
    return data
}

const updateSaleDetail =  async ( id, saleDetailObj ) => {
    const data = SalesDetail.update( saleDetailObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteSaleDetail = async ( id ) => {
    const data  = SalesDetail.destroy( id )
    return await data
}

module.exports = {
    findAllSalesDetail,
    findSaleDetailById,
    createSaleDetail,
    updateSaleDetail,
    deleteSaleDetail
}