Created 5 methods for User and 5 methods for Comment

User (CRUD):

<b>CREATE:</b>
	path: <i>'/users/'</i>,
	body: <i>{
		name: "Nikita Semenistyi",
		email: "nikita.semenistyi@binary-studio.com",
		userId: 1
	}</i>,
	response: <i>object with user info (with "\_id" - unique id from MongoDB)</i>

<b>READ:</b>	
--all users:
	path: <i>'/users/'</i>,
	body: <i>{}</i>,
	response: <i>array with user objects</i>
	
--by user id:
	path: <i>'/users/{id}'</i>,
	body: <i>{}</i>,
	response: <i>object with user info (with "\_id" - unique id from MongoDB)</i>
	
<b>UPDATE (by user id):</b>
	path: <i>'/users/{id}'</i>,
	body: <i>{
		name: "Darina Korotkih",
		email: "daria@binary-studio.com",
		userId: 1
	}</i>,
	response: <i>OK</i>
	
<b>DELETE (by user id):</b>
	path: <i>'/users/{id}'</i>,
	body: <i>{}</i>,
	response: <i>OK</i>
	
	
	
Comment (CRUD):

<b>CREATE:</b>
	path: <i>'/chat/'</i>,
	body: <i>{
		senderId: 1,
		reciverId: 2,
		textContent: "Hi, how are you?"
	}</i>,
	response: <i>object with comment info (with "\_id" - unique id from MongoDB and "dateOfPost" unique number millisecons of posting time)</i>

<b>READ:</b>
--all chat:
	path: <i>'/chat/',
	body: <i>{},
	response: <i>array with comment objects</i>
	
--by date of posting:
	path: <i>'/chat/{date(milliseconds)}',
	body: <i>{},
	response: <i>object with comment info (with "\_id" - unique id from MongoDB and "dateOfPost" unique number millisecons of posting time)</i>
	
<b>UPDATE (by date of posting):</b>
	path: <i>'/chat/{date(milliseconds)}',
	body: <i>{
		senderId: 1,
		reciverId: 2,
		textContent: "Do you have a plan to this weekend?"
	}</i>,
	response: <i>OK</i>
	
	//when you edit comment unique number millisecons of posting time is change to editing time
	
<b>DELETE (by date of posting):</b>
	path: <i>'/chat/{date(milliseconds)}'</i>,
	body: <i>{}</i>,
	response: <i>OK</i>
