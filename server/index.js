const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');
const app = express();

const postRoutes = require('./routes/post')

app.use('/post', postRoutes);
app.use(bodyParser.json());