let express = require('express');
const db = require('../models/db');
let router = express.Router();

router.get('/', function (req, res) {
	res.json(db);
});

// router.post('/', function (req, res) {
// 	db.push(req.body)
// 		.then(function (newItem) {
// 			res.json(newItem);
// 		})
// 		.catch(function (e) {
// 			res.send(e);
// 		});
// });

// router.get('/:regId', function (req, res) {
// 	db.findById(req.params.regId)
// 		.then(function (foundReg) {
// 			res.json(foundReg);
// 		})
// 		.catch(function (e) {
// 			res.send(e);
// 		});
// });

module.exports = router;
