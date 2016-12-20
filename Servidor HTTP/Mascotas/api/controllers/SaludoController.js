/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    hola: function (req, res) {
        if (req.method === 'GET') {
            res.json({
                nombre: 'hola get'
            });
        } else if (req.method === 'POST') {
            res.json({
                nombre: 'hola post'
            });
        } else {
            res.json({
                nombre: 'hola todos'
            });
        }
    },

    adios: function (req, res) {
        res.send('Adios');
    },

    hora: function (req, res) {
        res.send('Hora');
    }
};

// var parametros = req.allParams();
// para: parametros