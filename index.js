var express = require('express');
var db = require('./db');
var userService = require('./routes/user')
var chatService = require('./routes/comment')

var app = express();


//here must be my page, if i have time
//app.get('/', )

//user operations
app.get('/users', userService.getAllUser)

app.get('/users/:id', userService.getUserById)

app.post('/users', userService.createUser)

app.put('/users/:id', userService.updateUser)

app.delete('/users/:id', userService.deleteUser)



//chat operations
app.get('/chat', chatService.showAllComments)

app.post('/chat', chatService.createComment)

app.put('/chat/:dateOfPost', chatService.editComment)

app.delete('/chat/:dateOfPost', chatService.deleteComment)

app.get('/chat/:id', chatService.showReciversById)



//connecting to mongodb
db.connect('mongodb://localhost:27017/firstapi', function (err) {
	if (err) {
		return console.log(err);
	}
	app.listen(3128, function () {
		console.log('API run');
	})
})