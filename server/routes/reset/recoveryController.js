const router = require('express').Router;
const User = require('../../db/models/user').User;
const _ = require('lodash');

const recover = function(req, res){
    const email = _.pick(req.body, ['email']);
    User.findOne({email})

}