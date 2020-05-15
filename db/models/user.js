const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: value => validator.isEmail(value),
            message: 'Invalid Email'
        }
    },
    password: {
        type: String,
        required: true,
    }, 
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
})

UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    return _.pick(userObject, ['username','email']);
}

UserSchema.methods.generateAuthToken =  function(){
    console.log('generate token hit')
    try{
        let user = this;
        // console.log(user)
        let access = 'auth';
        const holdenv = process.env.JWT_SECRET;
        let token = jwt.sign({_id: user._id.toHexString(), access}, "arah").toString();
        console.log(token)
        user.tokens.push({access, token});
        return user.save().then( () => token)
    
    }catch(e){
        console.log(`Token Eror: ${e}`);
    }
}

UserSchema.statics.findByCredentials = function (email, password){
    const User = this;
    return User.findOne({email:email}).then(user => {
        if (!user){
            return Promise.reject();
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res){
                    console.log(res)
                    resolve(user)
                }else{
                    reject();
                }
            })
        })
    })
};

UserSchema.pre('save', function(next){
    const user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        })
    }else{
        next();
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = {User:User};