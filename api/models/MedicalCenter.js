/**
 * MedicalCenter.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',  // nombre conexion
  tableName: 'MedicalCenter',   // nombre tabla

  attributes: {
    name: {
      type: 'string',
      required: true,
      columnName: 'name',
      maxLength: 64,
    },
    address: {
      type: 'string',
      // required: true,
      columnName: 'address',
      maxLength: 64,
    },
    contact: {
      type: 'string',
      // required: true,
      columnName: 'contact',
      maxLength: 64,
    },
    email:{
      type: 'string',
      // required: true,
      columnName: 'email',
      // unique: true,
      isEmail: true
    },
    phone:{
      type: 'string',
      // required: true,
      columnName: 'phone',
      maxLength: 24
    },
    cel:{
      type: 'string',
      // required: true,
      columnName: 'cel',
      maxLength: 24
    },

    status: {
      type: 'boolean',
      defaultsTo: true,
      // required: true,
    },


    // RELACIONES

    // Centro Medico -> Doctores
    doctors: { // uno a muchos (nombre en plurar)
      collection : 'Doctor',  // modelo a relacionar
      via : 'medicalCenter'  // nombre del atributo FK en el modelo relacionado
    },

    // Centro Medico -> Pacientes
    patients: { // uno a muchos (nombre en plurar)
      collection : 'Patient',  // modelo a relacionar
      via : 'medicalCenter'  // nombre del atributo FK en el modelo relacionado
    }


  },

};

