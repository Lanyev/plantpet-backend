const {Providers} = require( '../models/index.models' )
const uuid = require( 'uuid' ).v4

try {
    Providers.bulkCreate([
        {
            id: uuid(),
            codigo: 'PRE-1', 
            name: 'KIM PET' 
        },
        {
            id: uuid(),
            codigo: 'ENV-1', 
            name: 'TINY PACK'
        },
        {
            id: uuid(),
            codigo: 'BOL-1', 
            name: 'PLASTICOS Y RESINAS'
        },
        {
            id: uuid(),
            codigo: 'TAP-1', 
            name: 'INYECCION PLASTICA'
        },
        {
            id: uuid(),
            codigo: 'TAP-2', 
            name: 'TAPANOSA'
        },
        {
            id: uuid(),
            codigo: 'TAP-3', 
            name: 'PLASTIMAS'
        }
    ])
} catch (error) {
    
}