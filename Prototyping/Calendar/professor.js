function generateProfessorView(){
	//adjusts the view of calandar.html to what the professor should see
	
	//Check if the current user is a professor
	//place authentication here instead of true
	if(true){
		//create button for adding events
		var button = document.createElement("Button");
		var text = document.createTextNode("Add Event");
		button.appendChild(text);
		button.onclick= function(){addEvent()};
		//monthElement coresponds to the upper(red) region of the calendar
		var monthElement = document.getElementsByClassName('month')[0];
		monthElement.appendChild(button);
	}
	
}

function addEvent(){
	//triggers when the Add event button is clicked
	//Adds event of the specified class to the calendar

	//Check if the current user is a professor/has the ability to
	//add to the current class
	if(true){

		console.log("adding event");
	}
	else{
	//authentication failed

	}
}