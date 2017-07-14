Created 5 methods for User and 5 methods for Comment

User (CRUD):

CREATE:
	path: '/users/',
	body: {
		name: "Nikita Semenistyi",
		email: "nikita.semenistyi@binary-studio.com",
		userId: 1
	},
	response: object with user info (with "_id" - unique id from MongoDB)
READ	
--all users:
	path: '/users/',
	body: {},
	response: array with user objects
	
--by user id:
	path: '/users/{id}',
	body: {},
	response: object with user info (with "_id" - unique id from MongoDB)
	
UPDATE (by user id):
	path: '/users/{id}',
	body: {
		name: "Darina Korotkih",
		email: "daria@binary-studio.com",
		userId: 1
	},
	response: OK
	
DELETE (by user id):
	path: '/users/{id}',
	body: {},
	response: OK
	
	
	
Comment (CRUD):

CREATE:
	path: '/chat/',
	body: {
		senderId: 1,
		reciverId: 2,
		textContent: "Hi, how are you?"
	},
	response: object with comment info (with "_id" - unique id from MongoDB and "dateOfPost" unique number millisecons of posting time)
READ	
--all chat:
	path: '/chat/',
	body: {},
	response: array with comment objects
	
--by date of posting:
	path: '/chat/{date(milliseconds)}',
	body: {},
	response: object with comment info (with "_id" - unique id from MongoDB and "dateOfPost" unique number millisecons of posting time)
	
UPDATE (by date of posting):
	path: '/chat/{date(milliseconds)}',
	body: {
		senderId: 1,
		reciverId: 2,
		textContent: "Do you have a plan to this weekend?"
	},
	response: OK
	
	//when you edit comment unique number millisecons of posting time is change to editing time
	
DELETE (by date of posting):
	path: '/chat/{date(milliseconds)}',
	body: {},
	response: OK