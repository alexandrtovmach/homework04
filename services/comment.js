var dbBridge = require('../repositories/bridge');

exports.showAllComments = function (callback) {
    dbBridge.findAllComments(function (err, docs) {
        callback(err, docs)
    })
};

exports.showOneComment = function (dateOfPost, callback) {
    dbBridge.findOneComment(dateOfPost, function (err, docs) {
        callback(err, docs)
    })
};

exports.createComment = function (comment, callback) {
    dbBridge.addOneComment(comment, function (err, docs) {
        callback(err, docs)
    })
};

exports.editComment = function (dateOfPost, editedComment, callback) {
    dbBridge.updateOneComment(dateOfPost, editedComment, function (err, docs) {
        callback(err, docs)
    })
};

exports.deleteComment = function (dateOfPost, callback) {
    dbBridge.removeOneComment(dateOfPost, function (err, docs) {
        callback(err, docs)
    })
};

exports.showReciversById = function (id, callback) {
    dbBridge.findAllContacts(id, function (err, docs) {
        callback(err, docs)
    });
};





