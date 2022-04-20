/**
 * MedicalRecord.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',  // nombre conexion
  tableName: 'MedicalRecord',   // nombre tabla

  attributes: {

    // motivo de la consulta
    reason:{
      type: 'string',
      required: true,
      columnName: 'reason',
      maxLength: 256
    },

    date: {
      type: 'string',
      required: true,
      columnName: 'date',
      minLength:8,
      maxLength:10
    },

    age:{
      type: 'number',
      required: true,
      columnName: 'age',
    },

    // LENSOMETRIA OJO DERECHO // rigth eye
    lensometryRE:{
      type: 'number',
      // required: true,
      columnName: 'lensometryRE',
    },

    // LENSOMETRIA OJO IZQUIERDO
    lensometryLE:{
      type: 'number',
      // required: true,
      columnName: 'lensometryLE',
    },

    // EXAMEN MANUAL OJO DERECHO
    avRE:{
      type: 'number',
      // required: true,
      columnName: 'avRE',
    },

    // EXAMEN MANUAL OJO IZQUIERDO
    avLE:{
      type: 'number',
      // required: true,
      columnName: 'avLE',
    },

    // EXAMEN Final OJO DERECHO
    avREFinal:{
      type: 'number',
      // required: true,
      columnName: 'avREFinal',
    },

    // EXAMEN Final OJO IZQUIERDO
    avLEFinal:{
      type: 'number',
      // required: true,
      columnName: 'avLEFinal',
    },

    // los valores son los signos + o -
    sphereRE:{
      type: 'number',
      // required: true,
      // maxLength: 1,
      columnName: 'sphereRE',
    },
    sphereLE:{
      type: 'number',
      // required: true,
      // maxLength: 1,
      columnName: 'sphereLE',
    },

    // cilindros
    cylinderRE:{
      type: 'number',
      // required: true,
      columnName: 'cylinderRE',
    },
    cylinderLE:{
      type: 'number',
      // required: true,
      columnName: 'cylinderLE',
    },

    //ejes
    axisRE:{
      type: 'number',
      // required: true,
      columnName: 'axisRE',
    },
    axisLE:{
      type: 'number',
      // required: true,
      columnName: 'axisLE',
    },

    // prismas
    prismRE:{
      type: 'number',
      // required: true,
      columnName: 'prismRE',
    },
    prismLE:{
      type: 'number',
      // required: true,
      columnName: 'prismLE',
    },

    // datos de pie de tabla
    ADD:{
      type: 'number',
      // required: true,
      columnName: 'ADD',
    },
    DP:{
      type: 'number',
      // required: true,
      columnName: 'DP',
    },
    ALT:{
      type: 'number',
      // required: true,
      columnName: 'ALT',
    },

    // observaciones
    remark: {
      type: 'string',
      // required: true,
      columnName: 'remark',
      maxLength: 248,
    },

    // indicaciones
    indications: {
      type: 'string',
      // required: true,
      columnName: 'indications',
      maxLength: 248,
    },

    // tipo de luna  es progresivo o bifocal o sin seleccion
    lunaTipo: {
      type: 'string',
      // required: true,
      columnName: 'lunaTipo',
      maxLength: 32,
    },

    // RELACIONES
    // Paciente -> Historias clinicas
    patient: {  // Nombre FK
      model: 'Patient',    // Modelo con el que se relaciona
      required: true    // Requerida de 1 - N
      //  false   // Opcional de 0 - N (por defecto)
    },

    // Historias clinicas -> test fanrsworth
    testFarnsworthMunsell: { // uno a muchos (nombre en plurar)
      collection : 'TestFarnsworthMunsell',  // modelo a relacionar
      via : 'medical_record'  // nombre del atributo FK en el modelo relacionado
    },

    // Historias clinicas -> test ishihara
    testIshihara: { // uno a muchos (nombre en plurar)
      collection : 'TestIshihara',  // modelo a relacionar
      via : 'medical_record'  // nombre del atributo FK en el modelo relacionado
    },

  },

};

