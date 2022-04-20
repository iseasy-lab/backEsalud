/**
 * TestFarnsworthMunsell.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',  // nombre conexion
  tableName: 'TestFarnsworthMunsell',   // nombre tabla

  attributes: {

    score:{
      // type: 'number',
      type: 'json',
      required: true,
      columnName: 'score',
    },

    date: {
      type: 'string',
      // required: true,
      columnName: 'date',
      minLength:8,
      maxLength:10
    },

    conclusion: {
      type: 'string',
      // required: true,
      columnName: 'conclusion',
      maxLength: 768,
      columnType: 'text'
    },
    age:{
      type: 'number',
      required: true,
      columnName: 'age',
    },

    // RELACIONES
    // Historia Clinica -> Test
    medical_record: {  // Nombre FK
      model: 'MedicalRecord',    // Modelo con el que se relaciona
      required: true    // Requerida de 1 - N
      //  false   // Opcional de 0 - N (por defecto)
    },

  },

};

