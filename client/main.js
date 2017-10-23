//Inicializacion del Socket para que se conecten
var socket = io.connect('http://172.16.5.201:8080', {'forceNew':true});

//Recibe mensaje creado en el servidor para los clientes
socket.on('messages', function(data){
    console.log(data);
    render(data);
})

//Función para pintar mensaje en el HTML
function render(data){
    var html = data.map(function(message, index){
        return (`
            <div class="message" id="box-msjs">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');
    var div_msgs = document.getElementById('messages');
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    socket.emit('add-message', message);
    document.getElementById('nickname').style.display = 'none';
    document.getElementById('text').value = "";
    return false;
}