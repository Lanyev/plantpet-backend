const {purchasesDetails} = require( '../models/index.models' )

const findAllPurchasesDetail = async (  ) => {
    const data = await purchasesDetails.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findPurchaseDetailById = async ( id ) => {
    const data = await purchasesDetails.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createPurchaseDetail = async ( purchaseDetailObj ) => {
    const data = purchasesDetails.create(purchaseDetailObj)
    return data
}

const updatePurchaseDetail =  async ( id, purchaseDetailObj ) => {
    const data = purchasesDetails.update( purchaseDetailObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deletePurchaseDetail = async ( id ) => {
    const data  = purchasesDetails.destroy( id )
    return await data
}

module.exports = {
    findAllPurchasesDetail,
    findPurchaseDetailById,
    createPurchaseDetail,
    updatePurchaseDetail,
    deletePurchaseDetail
}