const router = require('express').Router();
const { loginWithGoogle } = require('../controllers/authController');

router.post('/google', loginWithGoogle);

module.exports = router;
