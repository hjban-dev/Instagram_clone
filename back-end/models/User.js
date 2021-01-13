const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
	email: {
		type: String,
		trim: true,
		unique: 1,
	},
	name: {
		type: String,
		maxlength: 50,
	},
	nickname: {
		type: String,
		maxlength: 50,
	},
	password: {
		type: String,
		minglength: 5,
	},
});

userSchema.methods.checkPassword = function (plainPassword, cb) {
	let isMAtch = plainPassword === this.password;
	cb(null, isMAtch);
};

const User = mongoose.model("User", userSchema);
module.exports = { User };
