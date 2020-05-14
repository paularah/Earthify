/**
 * Database configuration lives here 
 * @todo remember to switch for local db to atlas cluster. 

 */

var mongoose = require('mongoose');
console.log(process.env.MONGO_URI)

mongoose.connect('mongodb://localhost:27017/Earthify', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database")
});

module.exports = {
    mongoose:db
};
