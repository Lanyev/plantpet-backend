const {Categories, Products} = require( '../models/index.models' )

const findAllCategories = async (  ) => {
    const data = await Categories.findAll({
        where:{
            state: (this.state  != false)
        },
        // attributes:["id", "name" ]
        attributes:{
            exclude:["state"]
        },
        include:{
            model: Products,
            attributes:{
                exclude:["state", "createdAt", "updatedAt", "id", "idCategory"]
            }
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
    const data = await Categories.create(categoryObj)
    return data
}

const updateCategory =  async ( id, categoryObj ) => {
    const data = await Categories.update( categoryObj, {
        where:{
            id
        }
    } )
    return data[0] 
}

const deleteCategory = async ( id ) => {
    const data  = await Categories.destroy( id )
    return data
}

module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}