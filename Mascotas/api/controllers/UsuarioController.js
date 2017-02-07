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

                    return res.view('vistas/usuario/crearUsuario');
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

    }

    /*crearUsuarioForm: function (req, res) {

        var parametros = req.allParams();
        console.log(parametros);

        if (req.method == 'POST') {
            if (parametros.nombres && parametros.apellidos) {
                //creo el usuario
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (error, usuarioCreado) {
                    if (error) return res.serverError()
                    sails.log.info(usuarioCreado);

                    return res.view('vistas/home', {
                        titulo: 'Inicio',
                        numero: 1,
                        mauricio: {
                            nombre: 'Mauricio',
                            cedula: 1718137159
                        }
                    });
                });




            } else {
                // bad Request
                return res.badRequest('No envia todos los parametros');
            }
        } else {
            return res.badRequest('Metodo invalido');
        }

    }*/

};