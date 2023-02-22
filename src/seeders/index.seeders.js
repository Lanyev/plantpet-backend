const rolsSeeders = require( './rols.seeders' )
const permissionsSeeders = require( './permissions.seeders' )
const usersSeeders = require( './users.seeders' )
const categoriesSeeders = require( './categories.seeders' )
const productsSeeders = require( './products.seeders' )
const providersSeeders = require( './providers.seeders' )
const customersSeeders = require( './customers.seeders' )
// const providersInfoSeeders = require( './providersInfo.seeders' )
// const customersInfoSeeders = require( './customersInfo.seeders' )
// const purchasesSeeders = require( './purchases.seeders' )
// const saleDetailsSeeders = require( './salesDetail.seeders' )
// const purchasesDetailsSeeders = require( './purchasesDetail.seeders' )
// const salesSeeders = require( './sales.seeders' )


module.exports = {
    rolsSeeders,
    permissionsSeeders,
    usersSeeders, 
    categoriesSeeders,
    productsSeeders,
    providersSeeders,
    customersSeeders
    // providersInfoSeeders,
    // customersInfoSeeders,
    // purchasesSeeders,
    // salesSeeders,
    // purchasesDetailsSeeders,
    // saleDetailsSeeders,
}