const { Router } = require('express');
const router = Router();
const { getCountries } = require('../controllers/getAllCountries')

router.get('/', getCountries)

module.exports = router;