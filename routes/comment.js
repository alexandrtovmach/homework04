var Comment = require('../services/comment');
var bodyParser = require('body-parser');


exports.showAllComments = function (req, res) {
	Comment.showAllComments(function (err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	})
}

exports.createComment = function (req, res) {
	var comment = {
		senderId: req.body.senderId,
		reciverId: req.body.reciverId,
		textContent: req.body.textContent,
		dateOfPost: Date.now()
	};
	Comment.createComment(comment, function (err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(comment);
	})
}

exports.editComment = function (req, res) {
	var editedComment = {
		senderId: req.body.senderId,
		reciverId: req.body.reciverId,
		textContent: req.body.textContent,
		dateOfPost: Date.now()
	};
	Comment.editComment(req.params.dateOfPost, editedComment, function (err) {
		if (err) {
			console.log(err)
			return res.sendStatus(500);
		}
		res.sendStatus(200)
	})
}

exports.deleteComment = function (req, res) {
	Comment.deleteComment(req.params.dateOfPost, function (err) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200)
	})
}

exports.showReciversById = function (req, res) {
	Comment.showReciversById(req.params.id, function (err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	})
}
