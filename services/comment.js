var db = require('../db');

exports.showAllComments = function (callback) {
	db.get().collection('comments').find().sort({dateOfPost: -1}).toArray(function (err, docs) {
		callback(err, docs)
	})
}

exports.createComment = function (comment, callback) {
	db.get().collection('comments').insert(comment, function (err, docs) {
		callback(err, docs)
	})
}

exports.editComment = function (dateOfPost, editedComment, callback) {
	db.get().collection('comments').updateOne({dateOfPost: +dateOfPost}, editedComment, function (err, docs) {
		callback(err, docs)
	})
}

exports.deleteComment = function (dateOfPost, callback) {
	db.get().collection('comments').removeOne({dateOfPost: +dateOfPost}, function (err, docs) {
		callback(err, docs)
	})
}

exports.showReciversById = function (id, callback) {
	db.get().collection('comments').find({ senderId: +id }, {reciverId: 1, _id: 0}).toArray(function (err, docs) {
		callback(err, docs)
	});
}





