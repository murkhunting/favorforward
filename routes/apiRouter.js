'use strict';
const express = require('express');
const router = express.Router();

// const Restaurants = require('../models/Restaurant.model');
const Favors = require('../models/NewFavor.model');

// GET  /api/restaurants     -  Get restaurants listings.
router.get('/favors', (req, res, next) => {
  Favors.find()
    .then(favors => {
      //CL it should look in the proper key, meaning-> "favor.location" of each
      res.json(favors)
    })
    .catch((err) => console.log(err));
});

// router.get('/restaurants', (req, res, next) => {
//   Restaurants.find()
//     .then(restaurants => {
//       res.json(restaurants)
//     })
//     .catch((err) => console.log(err));
// });

module.exports = router;