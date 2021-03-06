const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = Schema(
	{
		writer: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		description: {
			type: String,
		},
		filePath: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Upload = mongoose.model("Upload", uploadSchema);
module.exports = { Upload };
