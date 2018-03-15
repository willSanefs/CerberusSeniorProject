//get our elements via identification 
var data  = document.getElementById("uploader");
var upload = document.getElementById("Upload-btn");

//listen for file selection 

upload.addEventListener('change', function(e){
//get elements 
	var file = e.target.files[0];
	
//create a storage ref
	var storageRef = firebase.storage().ref("Surveys"/ + file.name);

//upload file 
	var uploads = storageRef.put(file);

	task.on('state changed');

});

	
