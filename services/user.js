var db = require('../db');

exports.getAllUser = function (callback) {
	db.get().collection('users').find().toArray(function (err, docs) {
		callback(err, docs)
	})
}

exports.getUserById = function (id, callback) {
	db.get().collection('users').findOne({ userId: id }, function (err, docs) {
		callback(err, docs)
	})
}

exports.createUser = function (user, callback) {
	db.get().collection('users').insert(user, function (err, docs) {
		callback(err, docs)
	})
}

exports.updateUser = function (id, newUser, callback) {
	db.get().collection('users').updateOne({userId: id}, newUser, function (err, docs) {
		callback(err, docs)
	})
}

exports.deleteUser = function (id, callback) {
	db.get().collection('users').removeOne({userId: id}, function (err, docs) {
		callback(err, docs)
	})
}