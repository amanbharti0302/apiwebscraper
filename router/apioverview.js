const express = require('express');
const apiController = require('./../controller/apicontroller');

const router = express.Router();


router
  .route('/')
  .get(apiController.overview);



  module.exports = router;