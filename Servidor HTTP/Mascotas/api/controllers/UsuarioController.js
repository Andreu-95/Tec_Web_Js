/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    crearUsuario: function (req, res) {
        Usuario.create({
            nombres: 'Pepe Jose',
            apellidos: 'Icaza Chung',
            correo: 'pepe.chung@aol.com'
        }).exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(err);
            }

            sails.log.info(usuarioCreado);
            return res.ok(usuarioCreado);
        });
    }
};