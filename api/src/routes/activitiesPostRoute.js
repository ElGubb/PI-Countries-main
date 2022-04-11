const { Router } = require('express');
const router = Router();
const { postActivities } = require('../controllers/activities')

router.post('/post', postActivities)

module.exports = router;