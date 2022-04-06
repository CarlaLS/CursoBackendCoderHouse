
const express= require('express')
const Contenedor= require('./desafio3')
const getRandomInt = require('./funcionRandom')

const app = express()

const articulo = new Contenedor(`productos.json`)


app.get('/productos', (req, res) => {
    
    res.send(articulo.getAll())
 })
 
 app.get('/productoRandom', (req, res) => {
    const productos= articulo.getAll()
    
   
    res.send(productos[getRandomInt(productos.length)])
 })




const PORT = 8080
const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))