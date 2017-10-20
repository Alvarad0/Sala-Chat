//Inicializacion de Variable expres pasandosela al server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Creación de ruta
app.get('/mensaje', function(req, res){
    res.status(200).send('Hola Mundo!!!');
});

//Inicializacion del Servidor
server.listen(8080, function(){
    console.log("Servidor funcionando en el puerto 8080");
})
