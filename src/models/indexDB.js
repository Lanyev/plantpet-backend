const Categories = require( './categories.models' )
const Customers = require( './customers.models' )
const CustomersInfo = require( './customersInfo.models' )
const Permissions = require( './permissions.models' )
const Products = require( './products.models' )
const Providers = require( './providers.models' )
const ProvidersInfo = require( './providersInfo.models' )
const Purchases = require( './purchases.models' )
const PurchasesDetail = require( './purchasesDetail.models' )
const Rols = require( './rols.models' )
const Sales = require( './sales.models' )
const SalesDetail = require( './salesDetail.models' )
const Users = require( './users.models' )

Rols.hasMany( Users, {foreignKey: "idRol", sourceKey: "id"} )
Users.belongsTo( Rols, {foreignKey: "idRol", targetKey: "id"} )

Categories.hasMany( Products, {foreignKey: "idCategory", sourceKey: "id"} )
Products.belongsTo( Categories, {foreignKey: "idCategory" , targetKey: "id"} )


Sales.hasMany( SalesDetail, {foreignKey: "idSale", sourceKey: "id"} )
SalesDetail.belongsTo( Sales, {foreignKey: "idSale", targetKey: "id"} )

Purchases.hasMany( PurchasesDetail, {foreignKey: "idPurchase", sourceKey: "id"} )
PurchasesDetail.belongsTo( Purchases, {foreignKey: "idPurchase", targetKey: "id"} )

Products.hasMany( SalesDetail, {foreignKey: "idProduct", sourceKey: "id"} )
SalesDetail.belongsTo( Products, {foreignKey: "idProduct", targetKey: "id"} )

Products.hasMany( PurchasesDetail, {foreignKey: "idProduct", sourceKey: "id"} )
PurchasesDetail.belongsTo( Products, {foreignKey: "idProduct", targetKey: "id"} )

Users.hasMany( Purchases, {foreignKey: "idUser", sourceKey: "id"} )
Purchases.belongsTo( Users, {foreignKey: "idUser", targetKey: "id"} )

Users.hasMany( Sales, {foreignKey: "idUser", sourceKey: "id"} )
Sales.belongsTo( Users, {foreignKey: "idUser", targetKey: "id"} )

Rols.hasMany( Permissions, {foreignKey: "idRol", sourceKey: "id"} )
Permissions.belongsTo( Rols, {foreignKey: "idRol", targetKey: "id"} )

Customers.hasMany( Sales, {foreignKey: "idCustomer", sourceKey: "id"} )
Sales.belongsTo( Customers, {foreignKey: "idCustomer", targetKey: "id"} )

Providers.hasMany( Purchases, {foreignKey: "idProvider", sourceKey: "id"} )
Purchases.belongsTo( Providers, {foreignKey: "idProvider", targetKey: "id"} )

Providers.hasMany( ProvidersInfo, {foreignKey: "idProvider", sourceKey: "id"} )
ProvidersInfo.belongsTo( Providers, {foreignKey: "idProvider", targetKey: "id"} )

Customers.hasMany( CustomersInfo, {foreignKey: "idCustomer", sourceKey: "id"} )
CustomersInfo.belongsTo( Customers, {foreignKey: "idCustomer", targetKey: "id"} )

module.exports = {
    Categories,
    Customers,
    CustomersInfo,
    Permissions,
    Products,
    Providers,
    ProvidersInfo,
    Purchases,
    PurchasesDetail,
    Rols,
    Sales,
    SalesDetail,
    Users
}