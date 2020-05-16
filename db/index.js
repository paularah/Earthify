/**
 * Database configuration lives here 
 * @todo remember to switch for local db to atlas cluster. 

 */

var mongoose = require('mongoose');
// console.log(process.env.MONGO_URI)

mongoose.connect('mongodb+srv://arah:samflexino@earthify-rdpdj.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} ).then(e => {
  console.log('Unable to connect to database');
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database")
});

module.exports = {
    mongoose:db
};
