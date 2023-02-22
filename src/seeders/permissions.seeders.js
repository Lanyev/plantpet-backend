const {Permissions} = require( '../models/index.models' )
const uuid = require( 'uuid' ).v4

try {
    Permissions.bulkCreate([
//--------------------Administrador-------------------------
        {
            id:uuid(),
            idRol: 1,
            name: 'categories'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'customersInfos'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'customers'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'permissions'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'products'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'providersInfos'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'providers'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'purchases'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'purchasesDetails'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'rols'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'sales'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'salesDetails'
        },
        {
            id:uuid(),
            idRol: 1,
            name: 'users'
        },
//----------------------------------------------------------
//---------------------Contabilidad-------------------------
        {
            id:uuid(),
            idRol: 2,
            name: 'customersInfos'
        },
        {
            id:uuid(),
            idRol: 2,
            name: 'customers'
        },
        {
            id:uuid(),
            idRol: 2,
            name: 'products'
        },
        {
            id:uuid(),
            idRol: 2,
            name: 'providersInfos'
        },
        {
            id:uuid(),
            idRol: 2,
            name: 'providers'
        },
        {
            id:uuid(),
            idRol: 2,
            name: 'purchases'
        },
        {
            id:uuid(),
            idRol: 2,
            name: 'purchasesDetails'
        },
        {
            id:uuid(),
            idRol: 2,
            name: 'sales'
        },
        {
            id:uuid(),
            idRol: 2,
            name: 'salesDetails'
        },
//----------------------------------------------------------   
//----------------------Produccion--------------------------
        {
            id:uuid(),
            idRol: 3,
            name: 'categories'
        },
        {
            id:uuid(),
            idRol: 3,
            name: 'products'
        },
        {
            id:uuid(),
            idRol: 3,
            name: 'purchases'
        },
//----------------------------------------------------------
//-----------------------Almacen----------------------------
        {
            id:uuid(),
            idRol: 4,
            name: 'categories'
        },
        {
            id:uuid(),
            idRol: 4,
            name: 'products'
        },
        {
            id:uuid(),
            idRol: 4,
            name: 'providersInfos'
        },
        {
            id:uuid(),
            idRol: 4,
            name: 'providers'
        },
        {
            id:uuid(),
            idRol: 4,
            name: 'purchases'
        },
        {
            id:uuid(),
            idRol: 4,
            name: 'purchasesDetails'
        },
//----------------------------------------------------------
//------------------------Ventas----------------------------
        {
            id:uuid(),
            idRol: 5,
            name: 'categories'
        },
        {
            id:uuid(),
            idRol: 5,
            name: 'products'
        },
        {
            id:uuid(),
            idRol: 5,
            name: 'sales'
        },
        {
            id:uuid(),
            idRol: 5,
            name: 'salesDetails'
        }
//----------------------------------------------------------


    ])
} catch (error) {
    
}