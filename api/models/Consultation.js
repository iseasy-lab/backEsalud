/**
 * Consultation.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',  // nombre conexion
  tableName: 'Consultation',   // nombre tabla

  attributes: {

    date: {
      type: 'string',
      required: true,
      columnName: 'date',
      minLength:8,
      maxLength:10
    },

    time: {
      type: 'string',
      required: true,
      columnName: 'time',
      minLength:1,
      maxLength:10
    },

    deleted: {
      type: 'boolean',
      defaultsTo: false,
      // required: true,
    },

    status: {
      type: 'string',
      defaultsTo: 'Pendiente',
      columnName: 'status',
      minLength:1,
      maxLength:10
    },

    detail: {
      type: 'string',
      // required: true,
      columnName: 'detail',
      maxLength: 248,
    },

    idMedicalCenter: {
      type: 'number',
      required: true,
      columnName: 'idMedicalCenter',
    },

    //RELACIONES
    // Consulta -> Doctor
    // patient: {  // Nombre FK
    //   model: 'Doctor',    // Modelo con el que se relaciona
    //   required: true    // Requerida de 1 - N
    //   //  false   // Opcional de 0 - N (por defecto)
    // },

    // Consulta -> Doctor
    doctor: {  // Nombre FK
      model: 'Doctor',    // Modelo con el que se relaciona
      required: true    // Requerida de 1 - N
      //  false   // Opcional de 0 - N (por defecto)
    },

    // Consulta -> Paciente
    patient: {  // Nombre FK
      model: 'Patient',    // Modelo con el que se relaciona
      required: true    // Requerida de 1 - N
      //  false   // Opcional de 0 - N (por defecto)
    },


  },

};

