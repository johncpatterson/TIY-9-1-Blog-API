var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// setup the user schema
var userSchema = new Schema({
	name: String, 
	age: Number,
	likejs: Boolean,
	id: Number,
});

module.exports = mongoose.model('User', userSchema);