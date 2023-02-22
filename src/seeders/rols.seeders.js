const {Rols} = require( '../models/index.models' )

try {
    Rols.bulkCreate([
        {
            id: 1,//"0afb436a-150a-4da0-aab6-8305decbb21b",
            name: 'Administrador'
        },
        {
            id: 2,//"b79308bb-1616-4306-a6dc-902960705f75",
            name: 'Contabilidad'
        },
        {
            id: 3,//"8879c1cf-978c-4478-b4ea-3388a6fb4588",
            name: 'Produccion'
        },
        {
            id: 4,//"15f700a7-ebad-475c-a7a1-0c30a92c9f9f",
            name: 'Almacen'
        },
        {
            id: 5,//"d31c63f6-4d4e-44b3-96cb-29f845138a5a",
            name: 'Vendedor'
        },

    ])
} catch (error) {
    console.log(error)
}
