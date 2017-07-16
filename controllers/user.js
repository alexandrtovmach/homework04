var User = require('../services/user');


exports.getAllUser = function (req, res) {
	User.getAllUser(function (err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	})
}

exports.getUserById = function (req, res) {
	User.getUserById(+req.params.id, function (err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	})
}

exports.createUser = function (req, res) {
	var user = {
		name: req.body.name,
		email: req.body.email,
		userId: +req.body.userId
	};
	User.createUser(user, function (err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(user);
	})
}

exports.updateUser = function (req, res) {
	var newUser = {
		name: req.body.name,
		email: req.body.email,
		userId: +req.body.userId
	};
	User.updateUser(+req.params.id, newUser, function (err) {
		if (err) {
			console.log(err)
			return res.sendStatus(500);
		}
		res.sendStatus(200)
	})
}

exports.deleteUser = function (req, res) {
	User.deleteUser(+req.params.id, function (err) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200)
	})
}