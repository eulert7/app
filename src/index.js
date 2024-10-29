
import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import indexRouter from './router/index.js'
import { Conectar } from './public/services/conexion.js'

const app = express()

const __dirname= dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname,'views'))
app.set('views', join(__dirname,'views'))
app.use(indexRouter)


app.use(express.static(join(__dirname,'public')))

app.set('view engine', 'ejs')

Conectar()

app.listen(3000)
console.log("el servidor se este jecutando en el puerto 3000")