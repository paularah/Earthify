/**
 * Database configuration lives here 
 * @todo remember to switch for local db to atlas cluster. 

 */

var mongoose = require('mongoose');
require('dotenv');

mongoose.connect('process.env.CLUSTER_SRV', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database")
});

module.exports = {
    mongoose:db
};
