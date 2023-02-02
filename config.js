//? Aqui  definiremos todas las Enviroment Variables
//? Aqui  definiremos todas las Enviroment Variables
require('dotenv').config()

const configs = {
    api:{
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST,
    },
    db:{
        development:{
            dialect: 'postgres',
            host: '',
            username: '',
            password: '',
            database: '',
            define:{
                timestamps:true, //? Va a utilizar por defecto el created_at y updated_at
                underscored: true, //? Convierte camelCase en snake_case en todos los nombres y atributos de mi modelo
                underscoredAll: true //? 
            }
        },
        test:
        {
            dialect: 'postgres',
            host: '',
            username: '',
            password: '',
            database: '',
            define:{
                timestamps:true, //? Va a utilizar por defecto el created_at y updated_at
                underscored: true, //? Convierte camelCase en snake_case en todos los nombres y atributos de mi modelo
                underscoredAll: true //? 
            }
        },
        production:{
            dialect: 'postgres',
            host: '',
            username: '',
            password: '',
            database: '',
            define:{
                timestamps:true, //? Va a utilizar por defecto el created_at y updated_at
                underscored: true, //? Convierte camelCase en snake_case en todos los nombres y atributos de mi modelo
                underscoredAll: true //? 
            }
        }
    }
}

module.exports = configs