/**
 * Doctor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'default',  // nombre conexion
  tableName: 'Doctor',   // nombre tabla

  attributes: {

    identification: {
      type: 'string',
      required: true, // Por defecto es false
      columnName: 'identification',
      // unique: true, // Por defecto es false
      minLength: 5,
      maxLength: 25
    },
    name:{
      type: 'string',
      columnName: 'name',
      minLength: 2,
      maxLength: 128,
      required: true, // Por defecto es false
    },
    status: {
      type: 'boolean',
      // required: true,
      defaultsTo: true,
    },

    // No email, porque tiene un usuario
    email: {
      type: 'string',
      required: true,
      columnName: 'email',
      // unique: true,
      // isEmail: true
    },

    password: {
      type: 'string',
      required: true,
      columnName: 'password',
      minLength: 8
    },

    rol: {
      type: 'string',
      required: true,
      columnName: 'rol',
    },

    phone:{
      type: 'string',
      // required: true,
      columnName: 'phone',
      maxLength: 24
    },
    position:{
      type: 'string',
      columnName: 'position',
      maxLength: 32
    },

    question1: {
      type: 'string',
      required: true,
      columnName: 'question1',
      maxLength: 256,
    },
    answer1: {
      type: 'string',
      required: true,
      columnName: 'answer1',
      maxLength: 256,
    },
    question2: {
      type: 'string',
      required: true,
      columnName: 'question2',
      maxLength: 256,
    },
    answer2: {
      type: 'string',
      required: true,
      columnName: 'answer2',
      maxLength: 256,
    },
    question3: {
      type: 'string',
      required: true,
      columnName: 'question3',
      maxLength: 256,
    },
    answer3: {
      type: 'string',
      required: true,
      columnName: 'answer3',
      maxLength: 256,
    },


    // RELACIONES
    // Centro Medico -> Usuarios
    medicalCenter: {  // Nombre FK
      model: 'MedicalCenter',    // Modelo con el que se relaciona
      required: true    // Requerida de 1 - N
      //  false   // Opcional de 0 - N (por defecto)
    },


    // Doctor -> consulta
    consultations: { // uno a muchos (nombre en plurar)
      collection : 'Consultation',  // modelo a relacionar
      via : 'doctor'  // nombre del atributo FK en el modelo relacionado
    },

  },

};

