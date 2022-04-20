/**
 * ImageIshiharaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  upload: function(req, res) {
    sails.log.debug(req.allParams()) // print de los parametros
    req.file('file') // this is the name of the file in your multipart form
      .upload({
        // optional
        // dirname: [SOME PATH TO SAVE IN A CUSTOM DIRECTORY]
        // dirname: 'ishiharaImages'
        dirname: require('path').resolve(sails.config.appPath, 'assets/images')
      }, function(err, uploads) {
        // try to always handle errors
        if (err) { return res.serverError(err) }
        // uploads is an array of files uploaded
        // so remember to expect an array object
        if (uploads.length === 0) { return res.badRequest('No file was uploaded') }
        // if file was uploaded create a new registry
        // at this point the file is phisicaly available in the hard drive
        console.log("uploads");
        console.log(uploads);
        ImageIshihara.create({
          path: '/images/'+uploads[0].fd.split('/').reverse()[0],
          // path: uploads[0].fd,
          filename: uploads[0].fd.split('/').reverse()[0],
          // filename: uploads[0].filename,
          status:req.allParams().status,
          reference_color:req.allParams().reference_color,
          real_result:req.allParams().real_result,
          idMedicalCenter:req.allParams().idMedicalCenter,
        }).exec(function(err, file) {
          if (err) { return res.serverError(err) }
          // if it was successful return the registry in the response
          return res.json(file)
        })
      })
  }



};

