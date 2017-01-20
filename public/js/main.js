var $friends = $('#friends');
var $name = $('#name');
var $occupation = $('#occupation');
var $age = $('#age');

var friendTemplate = "" + 
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" +

	"<p><strong>Occupation:</strong> {{occupation}}</p>" +

	"<p><strong>Age:</strong> {{age}}</p>" +

	"</li>";
//adding a friend
function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
}

//optimization of code
//saving where they are on the DOM
//saving time by setting this now 








 $(document).ready(function(){
		alert("jQuery is now working!!");
		//GET Data request
 		$.ajax({
 			type : "GET",
 			url  : "http://rest.learncode.academy/api/learncode/friends", 

 			//success

 			success: function(friends){				//this is called a promise
 				$.each(friends, function(i, friend){
 					addFriend(friend);
 				});
 			//POST to add a friend
 			$("#add-friend").on("click", function(){

 			var friend = {
 				name: $name.val(),
 				occupation: $occupation.val(),
 				age: $age.val()
 			};
});






 			$.ajax({
 				type: "POST",
 				url: "http://rest.learncode.academy/api/learncode/friends",
 				data: friend, 
 				success: function(newFriend){
 						addFriend(newfriend);
 					},

 				

 				error: function(){
 					alert("error");
 				},

 			});


 			//DELETE to delete a friend

 			

 			//error

 			// error: function(){
 			// 	alert("Error loading friends");
 			// },

 		//});
//});


//  		});

// });
