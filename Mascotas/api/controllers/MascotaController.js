/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  CrearMascota: function (req, res) {
    var parametros = req.allParams();
    if (parametros.nombre && parametros.idRaza) {
      var mascotaCrear = {
        nombre: parametros.nombre,
        fechaNacimiento: parametros.fechaNacimiento,
        paisNacimiento: parametros.paisNacimiento,
        idRaza: parametros.idRaza
      }

      if (mascotaCrear.fechaNacimiento == '') {
        delete mascotaCrear.fechaNacimiento
      }
      if (mascotaCrear.paisNacimiento == '') {
        delete mascotaCrear.paisNacimiento
      }

      Mascota.create(mascotaCrear).exec(function (err, mascotaCreada) {
        if (err) {
          return res.view('vistas/error', {
            error: {
              descripcion: "Fallo al crear la Mascota",
              rawError: err,
              url: "/CrearMascota"
            }
          });
        }

        Raza.find().populate('mascotas').exec(function (err, razasEncontradas) {
          if (err) {
            return res.view('vistas/error', {
              error: {
                descripcion: "Error Inesperado",
                rawError: err,
                url: "/ListasMascotas"
              }
            });
          }

          return res.view('vistas/mascotas/listarMascotas', {
            razas: razasEncontradas
          });
        });
      })
    } else {
      return res.view('vistas/error', {
        error: {
          descripcion: "No se completaron todos los campos",
          rawError: "Campos Incompletos",
          url: "/CrearMascota"
        }
      });
    }
  },

  EditarMascota: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id && parametros.nombre || parametros.fechaNacimiento || parametros.paisNacimiento || parametros.idRaza) {
      var mascotaEditar = {
        nombre: parametros.nombre,
        fechaNacimiento: parametros.fechaNacimiento,
        paisNacimiento: parametros.paisNacimiento,
        idRaza: parametros.idRaza
      }

      if (mascotaEditar.nombre == '') {
        delete mascotaEditar.nombre
      }
      if (mascotaEditar.fechaNacimiento == '') {
        delete mascotaEditar.fechaNacimiento
      }
      if (mascotaEditar.paisNacimiento == '') {
        delete mascotaEditar.paisNacimiento
      }
      if (mascotaEditar.idRaza == '') {
        delete mascotaEditar.idRaza
      }

      Mascota.update({
        id: parametros.id
      }, mascotaEditar).exec(function (err, mascotaEditada) {
        if (err) {
          return res.view('vistas/error', {
            error: {
              descripcion: "Hubo un problema al editar la mascota",
              rawError: err,
              url: "/ListarMascotas"
            }
          });
        }

        Raza.find().populate('mascotas').exec(function (err, razasEncontradas) {
          if (err) {
            return res.view('vistas/error', {
              error: {
                descripcion: "Error Inesperado",
                rawError: err,
                url: "/ListasMascotas"
              }
            });
          }

          return res.view('vistas/mascotas/listarMascotas', {
            razas: razasEncontradas
          });
        });
      })
    } else {
      return res.view('vistas/error', {
        error: {
          descripcion: "Necesitamos el ID y al menos un campo para editar la mascota",
          rawError: "No envía todos los campos",
          url: "/ListarMascotas"
        }
      })
    }
  },

  BorrarMascota: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Mascota.destroy({
        id: parametros.id
      }).exec(function (err, mascotaBorrada) {
        if (err) {
          return res.view('vistas/error', {
            error: {
              descripcion: "Hubo un problema al borrar la mascota",
              rawError: err,
              url: "/ListarMascotas"
            }
          });
        }

        Raza.find().populate('mascotas').exec(function (err, razasEncontradas) {
          if (err) {
            return res.view('vistas/error', {
              error: {
                descripcion: "Error Inesperado",
                rawError: err,
                url: "/ListasMascotas"
              }
            });
          }

          return res.view('vistas/mascotas/listarMascotas', {
            razas: razasEncontradas
          });
        });
      })
    } else {
      return res.view('vistas/error', {
        error: {
          descripcion: "Necesitamos el ID para borrar la mascota",
          rawError: "No envía ID",
          url: "/ListarMascotas"
        }
      });
    }
  }
};

