const categoriesController = require( './categories.controllers' )

const getAllCategories = (req, res) => {
  categoriesController.findAllCategories()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const getCategoryById = (req, res) => {
  const id = req.params.id
  categoriesController.findCategoryById(id)
    .then( data => data ?
      res.status(200).json({data}):
      res.status(404).json({message: "Category not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const postCategory = (req, res) => {
  const categoryObj = req.body
  categoriesController.createCategory(cateObj)
    .then( data => res.status(201).json({data})
    )
    .catch( err => res.status(400).json(err) )
}

const putCategory = (req, res) => {
  const id = req.params.id
  const categoryObj = req.body
  categoriesController.updateCategory( id, categoryObj )
    .then( data =>  data ?
      res.status(200).json({data}):
      res.status(404).json({message: "Category not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const PatchCategory = (req, res) => {
  const id = req.params.id
  const categoryObj = req.body
  categoriesController.updateCategory( id, categoryObj )
    .then( data => data ?
      res.status(200).json({data}):
      res.status(404).json({message: "Category not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const deleteCategory = (req, res) => {
  const id = req.params.id
  categoriesController.deleteCategory( id )
    .then( data =>  data ?
      res.status(200).json({data}):
      res.status(404).json({message: "Category not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

module.exports = {
  getAllCategories,
  getCategoryById,
  postCategory,
  putCategory,
  PatchCategory,
  deleteCategory
}