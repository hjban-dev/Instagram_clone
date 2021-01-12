const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const config = require("./back-end/config/key");
const mongoose = require("mongoose");
mongoose
	.connect(config.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("MongoDB connecte6d..."))
	.catch((err) => console.log(err));

app.use("/api/users", require("./back-end/routes/users"));

const port = 5001;

app.listen(port, () => {
	console.log(`Server Running at ${port}`);
});
