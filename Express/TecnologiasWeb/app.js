var express = require('express');
var app = express();

var usuarios = [
        {
            id: 1,
            nombre: 'Juan',
            cedula: '1738292839'
        },
        {
            id: 2,
            nombre: 'Pepe',
            cedula: '1748392948'
        },
        {
            id: 3,
            nombre: 'Luis',
            cedula: '1728392838'
        }
    ];

app.get('/Usuarios/:id', function (req, res) {
   var idActual = req.params.id;
    for (var i = 0; i < usuarios.length; i++) {
        if (idActual == usuarios[i].id) {
            res.json(usuarios[i]);
            break;
        }
        else {
            res.send('Usuario no encontrado')
        }
    }
});

app.get('/Usuarios', function (req, res) {
   res.json(usuarios); 
});

app.get('/TecnologiasWeb', function (req, res) {
    res.send('Con Get!');
});

app.post('/TecnologiasWeb', function (req, res) {
    console.log('Lo que tengo en Request es: ');
    console.log(req.header);
    
    var parametros = red.params;
    console.log(parametros);
    
    /*var usuario = {
        nombre: 'Andrés',
        cedula: '1723123459'
    };*/
    
    /*usuario.apellido = '';
    usuario.mascotas = [];
    usuario.casado = false;*/
    
    res.append('token', '1234');
    
    //res.send('Con Post!');
    //res.json(usuario);
});

app.put('/TecnologiasWeb', function (req, res) {
    res.send('Con Put!');
})

app.listen(5050, function () {
    console.log('Example app!');
});