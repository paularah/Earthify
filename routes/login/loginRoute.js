// const loginFn = require('./loginController').login;
const router = require('express').Router();
const _ = require('lodash');
const User = require('../../db/models/user').User;




router.post('/login', (req, res) => {
    console.log('login routes hit')
    console.log(req.body)
    const userInput = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(userInput.email, userInput.password).then((user) => {
        user.generateAuthToken().then(token => {
            if (user.email === 'p.arah@aludtudent.com' && user.username === 'Paul Arah'){
                res.status(200).send('admin');
            }else{
                res.header('x-auth', token).status(200).send(user);
            }
              
        }).catch(e => {
            console.log(e)
        })

        // add confitional for redirecting to admin 
    }).catch(e => {
        res.status(400).send('cant find user');
        console.log('unable to find user credentials');
    })
   
        
          
});


module.exports = router;