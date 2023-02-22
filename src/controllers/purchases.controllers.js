const {Purchases} = require( '../models/index.models' )

const findAllPurchases = async (  ) => {
    const data = await Purchases.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findPurchaseById = async ( id ) => {
    const data = await Purchases.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createPurchase = async ( purchaseObj ) => {
    const data = Purchases.create(purchaseObj)
    return data
}

const updatePurchase =  async ( id, purchaseObj ) => {
    const data = Purchases.update( purchaseObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deletePurchase = async ( id ) => {
    const data  = Purchases.destroy( id )
    return await data
}

module.exports = {
    findAllPurchases,
    findPurchaseById,
    createPurchase,
    updatePurchase,
    deletePurchase
}