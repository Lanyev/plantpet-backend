const Categories = require( './categories.models' )
const Customers = require( './customers.models' )
const CustomersInfos = require( './customersInfos.models' )
const Permissions = require( './permissions.models' )
const Products = require( './products.models' )
const Providers = require( './providers.models' )
const ProvidersInfos = require( './providersInfos.models' )
const Purchases = require( './purchases.models' )
const PurchasesDetails = require( './purchasesDetails.models' )
const Rols = require( './rols.models' )
const Sales = require( './sales.models' )
const SalesDetails = require( './salesDetails.models' )
const Users = require( './users.models' )

const referencesInit = () => {
    Rols.hasMany( Users, {foreignKey: "idRol", sourceKey: "id"} )
    Users.belongsTo( Rols, {foreignKey: "idRol", targetKey: "id"} )
    
    Categories.hasMany( Products, {foreignKey: "idCategory", sourceKey: "id"} )
    Products.belongsTo( Categories, {foreignKey: "idCategory" , targetKey: "id"} )
    
    
    Sales.hasMany( SalesDetails, {foreignKey: "idSale", sourceKey: "id"} )
    SalesDetails.belongsTo( Sales, {foreignKey: "idSale", targetKey: "id"} )
    
    Purchases.hasMany( PurchasesDetails, {foreignKey: "idPurchase", sourceKey: "id"} )
    PurchasesDetails.belongsTo( Purchases, {foreignKey: "idPurchase", targetKey: "id"} )

    Products.hasMany( SalesDetails, {foreignKey: "idProduct", sourceKey: "id"} )
    SalesDetails.belongsTo( Products, {foreignKey: "idProduct", targetKey: "id"} )

    Products.hasMany( PurchasesDetails, {foreignKey: "idProduct", sourceKey: "id"} )
    PurchasesDetails.belongsTo( Products, {foreignKey: "idProduct", targetKey: "id"} )

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

    Providers.hasMany( ProvidersInfos, {foreignKey: "idProvider", sourceKey: "id"} )
    ProvidersInfos.belongsTo( Providers, {foreignKey: "idProvider", targetKey: "id"} )

    Customers.hasMany( CustomersInfos, {foreignKey: "idCustomer", sourceKey: "id"} )
    CustomersInfos.belongsTo( Customers, {foreignKey: "idCustomer", targetKey: "id"} )
}

module.exports = {
    Categories,
    Customers,
    CustomersInfos,
    Permissions,
    Products,
    Providers,
    ProvidersInfos,
    Purchases,
    PurchasesDetails,
    Rols,
    Sales,
    SalesDetails,
    Users,
    referencesInit
}