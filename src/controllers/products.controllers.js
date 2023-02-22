const {Products} = require( '../models/index.models' )

const findAllProducts = async (  ) => {
    const data = await Products.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findProductById = async ( id ) => {
    const data = await Products.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createProduct = async ( id, ProductObj ) => {
    const data = Products.create(ProductObj)
    return data
}

const updateProduct = async ( id, ProductObj ) => {
    const data = Products.update( ProductObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteProduct = async ( id ) => {
    const data  = Products.destroy( id )
    return await data
}

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
