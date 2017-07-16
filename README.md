Created 5 methods for User and 5 methods for Comment

User (CRUD):
<br><br>
<b>CREATE:</b><pre>
	path: <i>'/users/'</i>,
	body: <i>{
		"name": "First User",
		"email": "user1@mail.com",
		"userId": 1
	}</i>,
	response: <i>object with user info (with "\_id" - unique id from MongoDB)</i>
	</pre>

<b>READ:</b>
<br><br>
--all users:<pre>
	path: <i>'/users/'</i>,
	body: <i>{}</i>,
	response: <i>array with user objects</i>
	</pre>
--by user id:<pre>
	path: <i>'/users/{id}'</i>,
	body: <i>{}</i>,
	response: <i>object with user info (with "\_id" - unique id from MongoDB)</i>
	</pre>
<b>UPDATE (by user id):</b><pre>
	path: <i>'/users/{id}'</i>,
	body: <i>{
		"name": "Second User",
		"email": "user2@mail.com",
		"userId": 1
	}</i>,
	response: <i>OK</i>
	</pre>
<b>DELETE (by user id):</b><pre>
	path: <i>'/users/{id}'</i>,
	body: <i>{}</i>,
	response: <i>OK</i>
	</pre>


Comment (CRUD):
<br><br>

<b>CREATE:</b><pre>
	path: <i>'/chat/'</i>,
	body: <i>{
		"senderId": 1,
		"reciverId": 2,
		"textContent": "Hi, how are you?"
	}</i>,
	response: <i>object with comment info (with "\_id" - unique id from MongoDB and "dateOfPost" unique number millisecons of posting time)</i>
	</pre>
<b>READ:</b>
<br><br>
--all chat:<pre>
	path: <i>'/chat/'</i>,
	body: <i>{}</i>,
	response: <i>array with comment objects</i>
	</pre>
--one comment:<pre>
    	path: <i>'/chat/:dateOfPost'</i>,
    	body: <i>{}</i>,
    	response: <i>comment object</i>
    	</pre>
--all contacts:<pre>
	path: <i>'/chat/contacts/{id}'</i>,
	body: <i>{}</i>,
	response: <i>array of comment objects with all contacts</i>
	</pre>
<b>UPDATE (by date of posting):</b><pre>
	path: <i>'/chat/{date(milliseconds)}'</i>,
	body: <i>{
		"senderId": 1,
		"reciverId": 2,
		"textContent": "Do you have a plan to this weekend?"
	}</i>,
	response: <i>OK</i>
	</pre>
	//when you edit comment unique number millisecons of posting time is change to editing time

<br><br>
<b>DELETE (by date of posting):</b><pre>
	path: <i>'/chat/{date(milliseconds)}'</i>,
	body: <i>{}</i>,
	response: <i>OK</i>
</pre>
