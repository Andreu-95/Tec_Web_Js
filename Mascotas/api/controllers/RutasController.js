/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {
        return res.view('vistas/home');
    },
    
    crearUsuario: function (req, res) {
        return res.view('vistas/usuario/crearUsuario');
    },
    
    error: function (req, res) {
        return res.view('vistas/error', {
            error: {
                descripcion: "Usted está por error en esta Ruta, diríjase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Inicio"
            }
        });
    },
    
    listarUsuarios: function (req, res) {
        Usuario.find().exec(function (err, usuariosEncontrados) {
            if (err) {
                return res.view('vistas/error', {
                    error: {
                        descripcion: "Hubo un problema cargando los usuarios",
                        rawError: err,
                        url: "/ListarUsuarios"
                    }
                });
            } else {
                return res.view('vistas/usuario/listarUsuario', {
                    usuarios: usuariosEncontrados
                });
            }
        });
    },
    
    editarUsuario: function (req, res) {
        return res.view('vistas/usuario/editarUsuario');
    }
};