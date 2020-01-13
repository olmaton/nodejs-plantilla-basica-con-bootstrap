const express = require('express')
const app = express()
app.set("PORT",3000)

//Middlewares
app.set('view engine', "ejs");
app.use(express.static('public'))
app.set("port",3000)

//Rutas
app.use(require("./routes/route"))

//Iniciar
app.listen(app.get("port"),function(data){
    console.log("Corriendo en: "+ app.get("port"))
})

module.exports = app