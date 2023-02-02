const categoriesController = require( './categories.controllers' )

const getAllCategories = (req, res) => {
  categoriesController.findAllCategories()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const getCategoryById = (req, res) => {
  categoriesController.findCategoryById()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const postCategory = (req, res) => {
  categoriesController.createCategory()
    .then( data => res.status(201).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const putCategory = (req, res) => {
  categoriesController.actualizeCategory()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const PatchCategory = (req, res) => {
  categoriesController.actualizePartialCategory()
    .then( data => res.status(200).json({data}) )
    .catch( err => res.status(400).json(err) )
}

const deleteCategory = (req, res) => {
  categoriesController.deleteCategory()
    .then( data => res.status(200).json({data}) )
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