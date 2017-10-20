//Inicializacion de Variable expres pasandosela al server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Carga inicial de la plantilla Html al abrir el Socket
app.use(express.static('client'));

//Creación de ruta
app.get('/mensaje', function(req, res){
    res.status(200).send('Hola Mundo!!!');
});

//Abrir conexión del Socket.io
 io.on('connection', function(socket){
     console.log("Nodo: " + socket.handshake.address + " Conectado.");
 })

//Inicializacion del Servidor
server.listen(8080, function(){
    console.log("Servidor funcionando en el puerto 8080");
})
