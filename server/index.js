const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('./db/index');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const loginRoutes = require('./routes/login/loginRoute')
const signupRoutes = require('./routes/signup/signupRoutes');


app.use(bodyParser.json());
app.use(loginRoutes);
app.use(signupRoutes);

app.listen(3000, () => {
    console.log(`Up and running on port`);
});
