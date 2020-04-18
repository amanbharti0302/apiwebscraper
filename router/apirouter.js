const express = require('express');
const apiController = require('./../controller/apicontroller');

const router = express.Router();


router
  .route('/')
  .get(apiController.linkcreater);

  router
  .route('/:link')
  .get(apiController.getdataofalink);


  module.exports = router;