const  router = require('express').Router();
const signUp = require('./signupController');
router.post('/register', signUp);

module.exports = router;