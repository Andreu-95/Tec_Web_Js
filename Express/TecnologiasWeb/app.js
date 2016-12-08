var express = require('express');
var fs = require('fs');

/*var app = express();

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
        }
    }
    res.send('Usuario no encontrado');
});

app.get('/Usuarios', function (req, res) {
    console.log(req.param('nombre'));
    console.log(req.query.nombre);

    res.json(usuarios);
});

app.post('/Usuarios', function (req, res) {
    console.log(req.query.nombre);
    console.log(req.query.cedula);

    if (!req.query.nombre)
        res.send('No puso nombre');
    else if (!req.query.cedula)
        res.send('No puso cédula');
    else {
        var nuevoUsuario = {
            id: usuarios.length + 1,
            nombre: req.query.nombre,
            cedula: req.query.cedula
        };
        usuarios.push(nuevoUsuario);
        res.json(nuevoUsuario);
    }
});

app.get('/TecnologiasWeb', function (req, res) {
    res.send('Con Get!');
});

app.post('/TecnologiasWeb', function (req, res) {
    console.log('Lo que tengo en Request es: ');
    console.log(req.header);

    var parametros = req.params;
    console.log(parametros);

    /*var usuario = {
        nombre: 'Andrés',
        cedula: '1723123459'
    };*/

    /*usuario.apellido = '';
    usuario.mascotas = [];
    usuario.casado = false;*/

    //res.append('token', '1234');

    //res.send('Con Post!');
    //res.json(usuario);
//});

/*app.put('/TecnologiasWeb', function (req, res) {
    res.send('Con Put!');
})

app.listen(5050, function () {
    console.log('Example app!');
});*/

fs.readFile('./paginas/pagina.html', 'utf8', function (error, archivo) {
    console.log(error);
    console.log(archivo);
});