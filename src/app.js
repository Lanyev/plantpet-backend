const express = require('express')

const db = require('./utils/database')
const apiV1Router = require( './routers/index.router' )
const {referencesInit} = require( './models/index.models' )
const {api:{port, host}} = require( '../config' )
const passportJWT = require( './middlewares/auth.meddleware' )

const app = express()
app.use(express.json())

db.authenticate() //? Mostrar en consola 
  .then( () => console.log('Las credenciales de la base de datos son correctos') )
  .catch( err => console.log(err) ) //! Error de autenticacion ( contraseña, usuarios o hosts )

db.sync() //? Sincronizar nuesta DB con los modelos que tenemos definidos
  .then( () => console.log('La base de datos de virus ha sido actualizada') )
  .catch( err => console.log(err) ) //! Error en las tablas, propiedades, etc.

referencesInit()

app.get( '/', ( req, res ) => {
  res.sendFile( 'D:\\plantpet-backend\\public\\pages\\index.html' )
})
//?-----------------------------------------------

app.get( '/protected', 
passportJWT,
( req, res ) =>{
  res.status(200).json( {
      message:'Solo puedes ver esto si estás autenticado'
  } )
})

//?-----------------------------------------------
app.use( "/api/v1", apiV1Router )

app.listen( port, () => console.log(`Listen1 on: ${host}`) )