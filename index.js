const express = require ( "express" )
app = express ()
const PORT = 8080


app.get ("/", (req,res) => {

    res.send ("bienvenidos a mi servidor")

})

app.get ("/productos", (req,res) => {

    res.send ("esto es un listado de productos")

})

app.post ("/productos", (req,res) => {

    res.send ("crear producto")

})

app.put ("/productos", (req,res) => {

    res.send ("actualizar producto")

})

app.delete ("/productos", (req,res) => {

    res.send ("borrar un producto")

})

app.get ("/usuarios", (req,res) => {

    res.send ("listado de usuarios")

})

app.post ("/usuarios", (req,res) => {

    res.send ("crear usuario")

})

app.put ("/usuarios", (req,res) => {

    res.send ("actualizar un usuario")

})

app.delete ("/usuarios", (req,res) => {

    res.send ("borrar un usuario")

})



app.listen ( PORT, () => console.log ( "servidor levantado para el segundo ejercicio" +  PORT))
