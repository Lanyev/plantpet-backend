const {Categories} = require( '../models/index.models' )
const uuid = require( 'uuid' ).v4

try {
    Categories.bulkCreate([
        {
            id: "e936c2fb-01aa-4d6d-a078-dfe32e0c099d",
            name: 'Botellas'
        },
        {
            id: '5151d7d4-f4f9-421e-a0ed-0e7967e86e19',
            name: 'Tapas'
        }
        // },
        // {
        //     name: 'Bolsas baja densidad'
        // },
        // {
        //     name: 'Etiquetas'
        // },
        // {
        //     name: 'Desechables'
        // },

    ])
} catch (err) {
    console.log(err)
}