const router = require('express').Router();
const { Car } = require('../models');
// const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
// router.get('/', withAuth, async (req, res) => {
router.get('/', async (req, res) => {
  try {
    // const carData = await Car.findAll();
    // const cars = carData.map(car => car.get({ plain: true }));

    res.render('homepage', {
      // cars
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
