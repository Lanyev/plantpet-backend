const express = require('express')
const db = require('./utils/database')
const apiRouter = require( './api_v1/apiV1.router' )


const app = express()
const PORT = 9000

app.use(express.json())

db.authenticate() //? Mostrar en consola 
  .then( () => console.log('Las credenciales de la base de datos son correctos') )
  .catch( err => console.log(err) ) //! Error de autenticacion ( contraseña, usuarios o hosts )

db.sync() //? Sincronizar nuesta DB con los modelos que tenemos definidos
  .then( () => console.log('La base de datos de virus ha sido actualizada') )
  .catch( err => console.log(err) ) //! Error en las tablas, propiedades, etc.

require('dotenv').config()

app.get( '/', ( req, res ) => {
    res.json( { message: "Welcome to PlantPet_Proyect by Julio Sanchez" })
})

app.use( "/api/v1", apiRouter )

app.listen( PORT, () => console.log(`Listen1 on port: ${PORT}`) )