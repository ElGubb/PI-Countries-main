const { Router } = require('express');
const router = Router();
const { getActivities } = require('../controllers/activities')


router.get('/', getActivities)

module.exports = router;