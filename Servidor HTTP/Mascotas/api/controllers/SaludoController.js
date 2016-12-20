/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hola: function (req, res) {
        res.send('Hola');
    },
    
    adios: function (req, res) {
        res.send('Adios');
    },
    
    hora: function (req, res) {
        res.send('Hora');
    }
};

