const express = require('express')
const app = express()

const apiRouter = require( './api_v1/apiV1.router' )

const PORT = 9000

app.use(express.json())

app.get( '/', ( req, res ) => {
    res.json( { message: "Welcome to PlantPet_Proyect by Julio Sanchez" })
})

app.use( "/api/v1", apiRouter )

app.listen( PORT, () => console.log(`Listen1 on port: ${PORT}`) )