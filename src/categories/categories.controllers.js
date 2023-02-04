const {Categories} = require( '../models/indexDB' )

const findAllCategories = async (  ) => {
    const data = await Categories.findAll({
        where:{
            state: (this.state  != false)
        }
    })
    return data
}

const findCategoryById = async ( id ) => {
    const data = await Categories.findOne({
        where:{
            id,
            state: (this.state  != false)
        }
    })
    return data
}

const createCategory = async ( categoryObj ) => {
    const data = Categories.create(categoryObj)
    return data
}

const updateCategory =  async ( id, categoryObj ) => {
    const data = Categories.update( categoryObj, {
        where:{
            id
        }
    } )
    return await data[0] 
}

const deleteCategory = async ( id ) => {
    const data  = Categories.destroy( id )
    return await data
}

module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}