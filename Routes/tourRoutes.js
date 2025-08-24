const fs = require('fs');

const express = require('express');
const tourController = require('./../Controllers/tourController');

const router = express.Router();
const middleware = router.param('id', tourController.checkBody);
router.param('id', tourController.checkID);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
