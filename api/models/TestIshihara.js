/**
 * TestIshihara.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',  // nombre conexion
  tableName: 'TestIshihara',   // nombre tabla

  attributes: {

    // aciertos
    hits:{
      type: 'number',
      required: true,
      columnName: 'hits',
    },

    // desaciertos
    misses:{
      type: 'number',
      required: true,
      columnName: 'misses',
    },

    conclusion: {
      type: 'string',
      // required: true,
      columnName: 'conclusion',
      maxLength: 248,
    },

    date: {
      type: 'string',
      // required: true,
      columnName: 'date',
      minLength:8,
      maxLength:10
    },

    // RELACIONES
    // TestIshihara -> ImageResult/Resultado de la imagen / n->n
    image_result: { // uno a muchos (nombre en plurar)
      collection : 'ImageResultIshihara',  // modelo a relacionar
      via : 'test_ishihara'  // nombre del atributo FK en el modelo relacionado
    },

    // Historia Clinica -> Test
    medical_record: {  // Nombre FK
      model: 'MedicalRecord',    // Modelo con el que se relaciona
      required: true    // Requerida de 1 - N
      //  false   // Opcional de 0 - N (por defecto)
    },


  },

};

