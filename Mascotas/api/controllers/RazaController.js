/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  CrearRaza: function (req, res) {
    var parametros = req.allParams();
    if (parametros.nombre) {
      var razaCrear = {
        nombre: parametros.nombre
      }

      Raza.create(razaCrear).exec(function (err, razaCreada) {
        if (err) {
          return res.view('vistas/error', {
            error: {
              descripcion: "Fallo al crear la Raza",
              rawError: err,
              url: "/CrearRaza"
            }
          });
        }

        Raza.find().exec(function (err, razasEncontradas) {
          if (err) {
            return res.view('vistas/error', {
              error: {
                descripcion: "Hubo un problema cargando las razas",
                rawError: err,
                url: "/ListarRazas"
              }
            });
          } else {
            return res.view('vistas/razas/listarRazas', {
              razas: razasEncontradas
            });
          }
        })
      })
    } else {
      return res.view('vistas/error', {
        error: {
          descripcion: "No se completaron todos los campos",
          rawError: "Campos Incompletos",
          url: "/CrearRaza"
        }
      });
    }
  },

  EditarRaza: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id && parametros.nombre) {
      var razaEditar = {
        nombre: parametros.nombre
      }

      Raza.update({
        id: parametros.id
      }, razaEditar).exec(function (err, razaEditada) {
        if (err) {
          return res.view('vistas/error', {
            error: {
              descripcion: "Hubo un problema al editar la raza",
              rawError: err,
              url: "/ListarRazas"
            }
          });
        }

        Raza.find().exec(function (err, razasEncontradas) {
          if (err) {
            return res.view('vistas/error', {
              error: {
                descripcion: "Hubo un problema cargando las razas",
                rawError: err,
                url: "/ListarRazas"
              }
            });
          } else {
            return res.view('vistas/razas/listarRazas', {
              razas: razasEncontradas
            });
          }
        })
      })
    } else {
      return res.view('vistas/error', {
        error: {
          descripcion: "Necesitamos el ID y el nombre para editar la raza",
          rawError: "No envía todos los campos",
          url: "/ListarRazas"
        }
      })
    }
  },

  BorrarRaza: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Raza.destroy({
        id: parametros.id
      }).exec(function (err, razaBorrada) {
        if (err) {
          return res.view('vistas/error', {
            error: {
              descripcion: "Hubo un problema al borrar la raza",
              rawError: err,
              url: "/ListarRazas"
            }
          });
        }

        Raza.find().exec(function (err, razasEncontradas) {
          if (err) {
            return res.view('vistas/error', {
              error: {
                descripcion: "Hubo un problema cargando las razas",
                rawError: err,
                url: "/ListarRazas"
              }
            });
          } else {
            return res.view('vistas/razas/listarRazas', {
              razas: razasEncontradas
            });
          }
        })
      })
    } else {
      return res.view('vistas/error', {
        error: {
          descripcion: "Necesitamos el ID para borrar la raza",
          rawError: "No envía ID",
          url: "/ListarRazas"
        }
      });
    }
  }
};

