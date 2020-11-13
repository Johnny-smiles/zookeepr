const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
//linking zookeeper api
router.use(require('./zookeeperRoutes'));

module.exports = router; 