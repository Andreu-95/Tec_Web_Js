/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      enum: ['Bulldog', 'Chihuahua', 'Pitbull'],
      unique: true,
      required: true
    },

    mascotas: {
      collection: 'Mascota',
      via: 'idRaza'
    }
  },

  afterDestroy: function (destroyedRecords, cb) {
    Mascota.destroy({
      idRaza: _.pluck(destroyedRecords, 'id')
    }).exec(cb)
  }
};
