// const loginFn = require('./loginController').login;
const router = require('express').Router();
const _ = require('lodash');
const User = require('../../db/models/user').User;




router.post('/login', (req, res) => {
    console.log('login routes hit')
    const userInput = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(userInput.email, userInput.password).then((user) => {
        User.generateAuthToken().then(token => {
            res.header('x-auth', token).status(200).send(user);
        })
    }).catch(e => {
        res.status(400).send();
        console.log('unable to find user credentials');
    })
   
        
          
});


module.exports = router;