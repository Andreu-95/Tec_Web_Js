/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    crearUsuario: function (req, res) {

        var parametros = req.allParams();
        console.log(parametros);

        if (req.method === 'POST') {
            if (parametros.nombres && parametros.apellidos) {
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (error, usuarioCreado) {
                    if (error) {
                        return res.serverError(error);
                    }

                    sails.log.info(usuarioCreado);
                    return res.ok(usuarioCreado);
                });
            } else {
                return res.badRequest('No envía todos los parámetros');
            }
        } else {
            return res.badRequest('Método inválido');
        }
    },
    
    CrearUsuarioForm: function (req, res) {
        var parametros = req.allParams();
        console.log(parametros);

        if (req.method === 'POST') {
            if (parametros.nombres && parametros.apellidos) {
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (error, usuarioCreado) {
                    if (error) {
                        return res.serverError(error);
                    }

                    sails.log.info(usuarioCreado);
                    return res.view('vistas/home');
                });
            } else {
                return res.badRequest('No envía todos los parámetros');
            }
        } else {
            return res.badRequest('Método inválido');
        }
    }
};