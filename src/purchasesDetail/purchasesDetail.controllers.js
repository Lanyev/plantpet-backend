const {PurchasesDetail} = require( '../models/indexDB' )

const findAllPurchasesDetail = async (  ) => {
    const data = await PurchasesDetail.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findPurchaseDetailById = async ( id ) => {
    const data = await PurchasesDetail.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createPurchaseDetail = async ( purchaseDetailObj ) => {
    const data = PurchasesDetail.create(purchaseDetailObj)
    return data
}

const updatePurchaseDetail =  async ( id, purchaseDetailObj ) => {
    const data = PurchasesDetail.update( purchaseDetailObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deletePurchaseDetail = async ( id ) => {
    const data  = PurchasesDetail.destroy( id )
    return await data
}

module.exports = {
    findAllPurchasesDetail,
    findPurchaseDetailById,
    createPurchaseDetail,
    updatePurchaseDetail,
    deletePurchaseDetail
}