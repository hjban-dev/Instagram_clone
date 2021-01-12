const express = require("express");
const router = express.Router();

const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

// ---------------------------
// 			User
// ---------------------------

router.get("/hi", (req, res) => {
	res.send("hello");
	// console.log(req);
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

router.post("/login", (req, res) => {
	User.findOne({ email: req.body.email }, (err, user) => {
		req.user = user;
		if (!user || err)
			return res.json({
				success: false,
				err,
			});

		res.json({ success: true, isAuth: true });
	});
});

module.exports = router;
