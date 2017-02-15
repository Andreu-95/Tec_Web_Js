module.exports = function (req, res, next) {

    var parametros = req.allParams();

    if (parametros.id == req.session.id) {
        return next();
    }

    return res.forbidden('Usted no puede editar la información de otros usuarios');
};