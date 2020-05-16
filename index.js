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
const newsRoute = require('./routes/news/newsroute');
const adminRoutes = require('./routes/admin/admin')
// const scrap = require('./scrappers/index');

const staticDir = path.resolve(__dirname, 'src')
const adminDir = path.resolve(__dirname, 'src', 'admin');
// third party middlewares 
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(staticDir));
app.use('/super', express.static(adminDir))

//routes 
app.use(baseRoute);
app.use(loginRoutes);
app.use(signupRoutes);
app.use(newsRoute);
app.use(adminRoutes);

app.listen(port, () => {
    console.log(`Up and running on port ${port}`);
});
