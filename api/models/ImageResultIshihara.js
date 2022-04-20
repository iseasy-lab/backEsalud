/**
 * ImageResultIshihara.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',  // nombre conexion
  tableName: 'ImageResultIshihara',   // nombre tabla

  attributes: {

    real_result: {
      type: 'string',
      required: true,
      columnName: 'real_result',
      maxLength: 64,
    },
    result: {
      type: 'string',
      required: true,
      columnName: 'result',
      maxLength: 64,
    },

    reference_color: {
      type: 'string',
      required: true,
      columnName: 'reference_color',
      maxLength: 128,
    },

    //RELACIONES
    // TestIshihara -> ImageResult/Resultado de la imagen / n->n
    test_ishihara: {  // Nombre FK
      model: 'TestIshihara',    // Modelo con el que se relaciona
      required: true    // Requerida de 1 - N
      //  false   // Opcional de 0 - N (por defecto)
    },
    // ImageIshihara -> ImageResult/Resultado de la imagen / n->n
    image_ishihara: {  // Nombre FK
      model: 'ImageIshihara',    // Modelo con el que se relaciona
      required: true    // Requerida de 1 - N
      //  false   // Opcional de 0 - N (por defecto)
    },



  },

};

