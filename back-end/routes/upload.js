const express = require("express");
const router = express.Router();

const { Upload } = require("../models/Upload");

const multer = require("multer");

// ---------------------------
// 			Upload
// ---------------------------

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}_${file.originalname}`);
	},
});

const multerFilter = function (req, file, cb) {
	// filter rules here
	if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
		return cb(new Error("Only image files are allowed!"));
	}
	cb(null, true);
};

let upload = multer({
	storage: storage,
	fileFilter: multerFilter,
}).single("file");

router.post("/files", (req, res) => {
	console.log(storage);

	upload(req, res, (err) => {
		if (err) res.json({ success: false, err });
		return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename });
	});
});

router.post("/save", (req, res) => {
	const upload = new Upload(req.body);

	upload.save((err, doc) => {
		if (err) return res.json({ success: false, err });
		res.json({ success: true });
	});
});

router.post("/getUpload", (req, res) => {
	Upload.find()
		.populate("writer")
		.exec((err, videos) => {
			if (err) res.status(400).send(err);
			res.status(200).json({ success: true, videos });
		});
});

module.exports = router;
