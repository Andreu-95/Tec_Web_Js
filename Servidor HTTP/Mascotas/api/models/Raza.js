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
          required: true
      },
      // Nombre en plural del modelo
      mascotas: {
          // Collection - nombre del modelo en sails
          collection: 'Mascota',
          // Via - campo por el cual relacionar foreign key
          via: 'idRaza'
      }
  }
};

