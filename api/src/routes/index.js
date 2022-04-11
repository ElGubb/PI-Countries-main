const { Router } = require('express');
const rutaPaises = require('./countriesRoute')
const rutaIdPaises = require('./countriesIdRoute')
const rutaActividades = require('./activitiesRoute')
const rutaPostActividades = require('./activitiesPostRoute')


const router = Router();

router.use('/activities', rutaActividades);
router.use('/activities', rutaPostActividades);
router.use('/countries', rutaPaises);
router.use('/countries', rutaIdPaises);


module.exports = router;