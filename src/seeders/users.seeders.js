const {Users} = require( '../models/index.models' )
const { hashPassword } = require('../utils/crypto')

try {
    Users.bulkCreate([
      {
        id: "a6a5738e-37d4-4725-ab45-91489afa1efd",
        idRol: 1,
        firstName: "Julio Cesar",
        lastName: "Sanchez Marquez",
        email: "julio930911@gmail.com",
        password: hashPassword("julio_1123"),
        phone: "+526731032406",
        state: true,
        createdAt: "2023-01-31T06:00:00.000Z",
        updatedAt: "2023-01-31T06:00:00.000Z"
      },
      {
        id: "eedae4fb-4372-4a5a-8db0-09ba5679a696",
        idRol: 2,
        firstName: "Irving Adrian",
        lastName: "Urias",
        email: "guerorolloficial@hotmail.com",
        password: hashPassword("1234567890"),
        phone: "+526731166867",
        state: true,
        createdAt: "2023-01-31T06:00:00.000Z",
        updatedAt: "2023-01-31T06:00:00.000Z"
      },
      {
        id: "62e53897-887d-4969-9c4d-5e9b874741b5",
        idRol: 2,
        firstName: "Oswaldo Emanuel",
        lastName: "Soto Lopez",
        email: "veosoto@hotmail.com",
        password: hashPassword("1234567890"),
        phone: "+526731068786",
        state: true,
        createdAt: "2023-01-31T06:00:00.000Z",
        updatedAt: "2023-01-31T06:00:00.000Z"
      },
      { 
        id: "dd162675-98a0-4eed-89ef-0442dfa2e02d",
        idRol: 2,
        firstName: "Jose Arturo",
        lastName: "Bojorquez Campos",
        email: "arturobc01@gmail.com",
        password: hashPassword("1234567890"),
        phone: "+526731066990",
        state: true,
        createdAt: "2023-01-31T06:00:00.000Z",
        updatedAt: "2023-01-31T06:00:00.000Z"
      }
    ])
} catch (err) {
    console.log(err)
}