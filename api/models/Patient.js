/**
 * Patient.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'default',  // nombre conexion
  tableName: 'Patient',   // nombre tabla

  attributes: {

    identification: {
      type: 'string',
      required: true, // Por defecto es false
      columnName: 'identification',
      unique: true, // Por defecto es false
      minLength: 5,
      maxLength: 25
    },
    name:{
      type: 'string',
      columnName: 'name',
      minLength: 3,
      maxLength: 128,
      required: true, // Por defecto es false
    },
    gender:{
      type: 'string',
      // required: true,
      columnName: 'gender',
      maxLength: 48
    },
    phone:{
      type: 'string',
      // required: true,
      columnName: 'phone',
      maxLength: 24
    },
    email: {
      type: 'string',
      // required: true,
      columnName: 'email',
      // unique: true,
      isEmail: true
    },

    address: {
      type: 'string',
      // required: true,
      columnName: 'address',
      maxLength: 128,
    },

    occupation: {
      type: 'string',
      // required: true,
      columnName: 'occupation',
      maxLength: 64,
    },
    status: {
      type: 'boolean',
      defaultsTo: true,
      // required: true,
    },

    date_of_birth: {
      type: 'string',
      required: true,
      columnName: 'date_of_birth',
      minLength:8,
      maxLength:10
    },



    // RELACIONES
    // Centro Medico -> Paciente
    medicalCenter: {  // Nombre FK
      model: 'MedicalCenter',    // Modelo con el que se relaciona
      required: true    // Requerida de 1 - N
      //  false   // Opcional de 0 - N (por defecto)
    },

    // Paciente -> consulta
    consultations: { // uno a muchos (nombre en plurar)
      collection : 'Consultation',  // modelo a relacionar
      via : 'patient'  // nombre del atributo FK en el modelo relacionado
    },

    // Paciente -> Historias clinicas
    medicalRecords: { // uno a muchos (nombre en plurar)
      collection : 'MedicalRecord',  // modelo a relacionar
      via : 'patient'  // nombre del atributo FK en el modelo relacionado
    },


  },

};

