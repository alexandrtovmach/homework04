/**
 * Created by Alexandr on 16.07.2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userService = require('../controllers/user')
var chatService = require('../controllers/comment')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//user operations
app.get('/users', userService.getAllUser)

app.get('/users/:id', userService.getUserById)

app.post('/users', userService.createUser)

app.put('/users/:id', userService.updateUser)

app.delete('/users/:id', userService.deleteUser)



//chat operations
app.get('/chat', chatService.showAllComments)

app.get('/chat/:dateOfPost', chatService.showOneComment)

app.post('/chat', chatService.createComment)

app.put('/chat/:dateOfPost', chatService.editComment)

app.delete('/chat/:dateOfPost', chatService.deleteComment)

app.get('/chat/contacts/:id', chatService.showReciversById)


module.exports = app;