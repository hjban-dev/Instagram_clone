const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const config = require("./server/config/key");
const mongoose = require("mongoose");
mongoose
	.connect(config.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("MongoDB connected..."))
	.catch((err) => console.log(err));

app.use("/users", require("./server/routes/users"));

const port = 5001;
app.listen(port, () => {
	console.log(`Server Running at ${port}`);
});
