const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('./db/index');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;

const loginRoutes = require('./routes/login/loginRoute')
const signupRoutes = require('./routes/signup/signupRoutes');
const baseRoute = require('./routes/baseRoute');

const staticDir = path.resolve(__dirname, 'src');
// third party middlewares 
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(staticDir));

//routes 
app.use(baseRoute);
app.use(loginRoutes);
app.use(signupRoutes);

app.listen(port, () => {
    console.log(`Up and running on port ${port}`);
});
