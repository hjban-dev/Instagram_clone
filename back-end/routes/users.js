const express = require("express");
const router = express.Router();

const { User } = require("../models/User");

router.get("/hi", (req, res) => {
	res.send("hello");
});

router.post("/register", (req, res) => {
	const user = new User(req.body);

	user.save((err, doc) => {
		if (err) return res.status(400).send(err);
		return res.status(200).json({
			success: true,
		});
	});
});

module.exports = router;