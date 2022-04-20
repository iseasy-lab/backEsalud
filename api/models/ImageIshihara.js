/**
 * ImageIshihara.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',  // nombre conexion
  tableName: 'ImageIshihara',   // nombre tabla

  attributes: {

    // file_path: {
    //   type: 'string',
    //   required: true,
    //   columnName: 'file_path',
    //   maxLength: 256,
    // },
    // file_name: {
    //   type: 'string',
    //   required: true,
    //   columnName: 'file_name',
    //   maxLength: 256,
    // },

    filename: {
      type: 'string',
      required: true
    },
    path: {
      type: 'string',
      required: true
    },

    status: {
      type: 'boolean',
      defaultsTo: true,
    },

    reference_color: {
      type: 'string',
      required: true,
      columnName: 'reference_color',
      maxLength: 128,
    },

    real_result: {
      type: 'string',
      required: true,
      columnName: 'real_result',
      maxLength: 64,
    },

    idMedicalCenter: {
      type: 'string',
      required: true,
      columnName: 'idMedicalCenter',
      maxLength: 64,
    },

    // RELACIONES
    // ImageIshihara -> ImageResult/Resultado de la imagen / n->n
    image_result: { // uno a muchos (nombre en plurar)
      collection : 'ImageResultIshihara',  // modelo a relacionar
      via : 'image_ishihara'  // nombre del atributo FK en el modelo relacionado
    },


  },

};

