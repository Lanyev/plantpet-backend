const {Products} = require( '../models/index.models' )
const uuid = require( 'uuid' ).v4

try {
    Products.bulkCreate([
        // idCategory = Botellas
        {
            id: uuid(),
            idCategory: "e936c2fb-01aa-4d6d-a078-dfe32e0c099d", 
            codigo: 'BT-28-400-0250-000', 
            name: 'Botella 250 ml', 
            description: 'Bulto de 0 botellas de 250 ml, cuello 28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "e936c2fb-01aa-4d6d-a078-dfe32e0c099d", 
            codigo: 'BT-28-400-0500-030', 
            name: 'Botella 500 ml', 
            description: 'Bulto de 30 botellas de 500 ml',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "e936c2fb-01aa-4d6d-a078-dfe32e0c099d", 
            codigo: 'BT-28-400-0500-060', 
            name: 'Botella 500 ml', 
            description: 'Bulto de 60 botellas de 500 ml, cuello 28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "e936c2fb-01aa-4d6d-a078-dfe32e0c099d", 
            codigo: 'BT-28-400-0500-150', 
            name: 'Botella 500 ml', 
            description: 'Bulto de 0 botellas de 500 ml, cuello 28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "e936c2fb-01aa-4d6d-a078-dfe32e0c099d", 
            codigo: 'BT-28-400-0600-000', 
            name: 'Botella 600 ml', 
            description: 'Bulto de 0 botellas de 600 ml, cuello 28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "e936c2fb-01aa-4d6d-a078-dfe32e0c099d", 
            codigo: 'BT-28-400-1000-104', 
            name: 'Botella 1000 ml', 
            description: 'Bulto de 104 botellas de 1000 ml, cuello 28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "e936c2fb-01aa-4d6d-a078-dfe32e0c099d", 
            codigo: 'BT-28-400-1500-000', 
            name: 'Botella 1500 ml', 
            description: 'Bulto de 0 botellas de 1500 ml, cuello 28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        //idCategory = Tapas
        {
            id: uuid(),
            idCategory: "5151d7d4-f4f9-421e-a0ed-0e7967e86e19", 
            codigo: 'TP-28-400-0250-000', 
            name: 'Tapa 250 ml', 
            description: 'Bolsa de 0 tapas R28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "5151d7d4-f4f9-421e-a0ed-0e7967e86e19", 
            codigo: 'TP-28-400-0500-030', 
            name: 'Tapa 500 ml', 
            description: 'Bolsa de 30 tapas R28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "5151d7d4-f4f9-421e-a0ed-0e7967e86e19", 
            codigo: 'TP-28-400-0500-060', 
            name: 'Tapa 500 ml', 
            description: 'Bolsa de 60 tapas R28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "5151d7d4-f4f9-421e-a0ed-0e7967e86e19", 
            codigo: 'TP-28-400-0500-150', 
            name: 'Tapa 500 ml', 
            description: 'Bolsa de 150 tapas R28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "5151d7d4-f4f9-421e-a0ed-0e7967e86e19", 
            codigo: 'TP-28-400-0600-000', 
            name: 'Tapa 600 ml', 
            description: 'Bolsa de 0 tapas R28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "5151d7d4-f4f9-421e-a0ed-0e7967e86e19", 
            codigo: 'TP-28-400-1000-104', 
            name: 'Tapa 1000 ml', 
            description: 'Bolsa de 104 tapas R28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },
        {
            id: uuid(),
            idCategory: "5151d7d4-f4f9-421e-a0ed-0e7967e86e19", 
            codigo: 'TP-28-400-1500-000', 
            name: 'Tapa 1500 ml', 
            description: 'Bolsa de 0 tapas R28/400',
            stock: 0.00,
            purchasePrice: 0.00,
            salePrice: 0.00
        },

    ])
} catch (error) {
    
}