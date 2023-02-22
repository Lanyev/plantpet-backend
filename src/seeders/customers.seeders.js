const {Customers} = require( '../models/index.models' )
const uuid = require( 'uuid' ).v4

try {
    Customers.bulkCreate([
        {
            id: uuid(),
            codigo: 'ND-1',
            name: 'New Delhi'
        },
        {
            id: uuid(),
            codigo: 'GR-1',
            name: 'Güero Roll'
        },
        {
            id: uuid(),
            codigo: 'FS-1',
            name: 'Food Service'
        }
    ])
} catch (error) {
    
}