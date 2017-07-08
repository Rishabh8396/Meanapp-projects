var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	FirstName : String,
	LastName :String,
	Email : String,
	Contact : Number,
	Age : Number,
	Country : String
});
module.exports = mongoose.model('users',userSchema);