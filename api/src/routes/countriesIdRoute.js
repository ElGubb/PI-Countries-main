const { Router } = require('express');
const router = Router();
const { getCountryById, } = require('../controllers/getAllCountries')

router.get('/:id', getCountryById)

module.exports = router;