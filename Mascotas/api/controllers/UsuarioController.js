/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    CrearUsuario: function (req, res) {

        if (req.method == 'POST') {
            var parametros = req.allParams();

            if (parametros.nombres && parametros.apellidos) {

                var usuarioCrear = {
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }

                if (usuarioCrear.correo == "") {
                    delete usuarioCrear.correo
                }

                Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {
                    if (err) {
                        return res.view('vistas/error', {
                            error: {
                                descripcion: "Fallo al crear el Usuario",
                                rawError: err,
                                url: "/CrearUsuario"
                            }
                        });
                    }

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
                });
            } else {
                return res.view('vistas/error', {
                    error: {
                        descripcion: "No se completaron todos los campos",
                        rawError: "Campos Incompletos",
                        url: "/CrearUsuario"
                    }
                });
            }
        } else {
            return res.view('vistas/error', {
                error: {
                    descripcion: "Error en el método HTTP",
                    rawError: "Método Inválido",
                    url: "/CrearUsuario"
                }
            })
        }

    },

    BorrarUsuario: function (req, res) {
        var parametros = req.allParams();

        if (parametros.id) {
            Usuario.destroy({
                id: parametros.id
            }).exec(function (err, usuariosRemovido) {
                if (err) {
                    return res.view('vistas/error', {
                        error: {
                            descripcion: "Hubo un problema al remover el usuario",
                            rawError: err,
                            url: "/ListarUsuarios"
                        }
                    });
                }

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
            });
        } else {
            return res.view('vistas/error', {
                error: {
                    descripcion: "Necesitamos el ID para borrar el usuario",
                    rawError: "No envía ID",
                    url: "/ListarUsuarios"
                }
            })
        }
    },

    EditarUsuario: function (req, res) {
        var parametros = req.allParams();

        if (parametros.id && parametros.nombres || parametros.apellidos || parametros.correo) {
            
            var usuarioEditar = {
                nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo
            };
            
            if (usuarioEditar.nombres == '') {
                delete usuarioEditar.nombres;
            }
            
            if (usuarioEditar.apellidos == '') {
                delete usuarioEditar.apellidos;
            }
            
            if (usuarioEditar.correo == '') {
                delete usuarioEditar.correo;
            }
            
            Usuario.update({
                id: parametros.id
            }, usuarioEditar).exec(function (err, usuarioEditado) {
                if (err) {
                    return res.view('vistas/error', {
                        error: {
                            descripcion: "Hubo un problema al editar el usuario",
                            rawError: err,
                            url: "/ListarUsuarios"
                        }
                    });
                }

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
            });
        } else {
            return res.view('vistas/error', {
                error: {
                    descripcion: "Necesitamos el ID y al menos un campo para editar el usuario",
                    rawError: "No envía todos los campos",
                    url: "/ListarUsuarios"
                }
            })
        }
    }
};