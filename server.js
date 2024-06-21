const express = require('express');
const dotenv = require('dotenv');

//cargar el archivo de config.env en dotenv
dotenv.config({path: './config/config.env'});

//crear objeto app a partir de la clase express()
const app = express();

//determinar el puerto de ejecución de server
const PORT = process.env.PORT ||  5000;

app.listen (PORT, console.log(`Server en modo ${process.env.NODE_ENV} en el puerto ${PORT}`));