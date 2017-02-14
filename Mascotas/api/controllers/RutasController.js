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
        var parametros = req.allParams(0);
        if (parametros.id) {
            Usuario.findOne({
                id: parametros.id
            }).exec(function (err, usuarioEncontrado) {
                if (err) {
                    return res.view('vistas/error', {
                        error: {
                            descripcion: "Error Inesperado",
                            rawError: err,
                            url: "/ListarUsuarios"
                        }
                    });
                }

                if (usuarioEncontrado) {
                    return res.view('vistas/usuario/editarUsuario', {
                        usuarioAEditar: usuarioEncontrado
                    });
                } else {
                    return res.view('vistas/error', {
                        error: {
                            descripcion: "No se encontró el usuario con el id: " + parametros.id,
                            rawError: "Usuario No Encontrado",
                            url: "/ListarUsuarios"
                        }
                    });
                }
            });
        } else {
            return res.view('vistas/error', {
                error: {
                    descripcion: "No ha enviado el parámetro ID",
                    rawError: "Faltan Parámetros",
                    url: "/ListarUsuarios"
                }
            });
        }
    }
};