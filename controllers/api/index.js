const router = require('express').Router();
const carRoutes = require('./carRoutes');

router.use('/users', carRoutes);

module.exports = router;
