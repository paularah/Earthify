const User = require('../../db/models/user').User;
const _ = require('lodash');

signup = (req, res) => {
    console.log('signup route hit')
    userInput = _.pick(req.body, ['email', 'password', 'username']);
    console.log(userInput)
    const user = new User(userInput);                                                                            
    user.save().then(() => {
        return user.generateAuthToken()
    }).then(token => {
        console.log(user)
        res.status(200).header('x-auth', token).send(user);
        console.log(user);
    }).catch((e) => {
        res.status(400).send()
        console.log(`Signup route error: ${e}`);
    })
}

module.exports = signup;