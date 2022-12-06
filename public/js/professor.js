// not the same as the ones in the professorpages folder 
// - comment for anyone who panicked w/o reading anything 

function generateProfessorView(){
	//adjusts the view of calandar.html to what the professor should see
	
	//Check if the current user is a professor
	//place authentication here instead of true
	if(false){
		//create button for adding events
		const button = document.createElement("Button");
		const text = document.createTextNode("Add Event");
		button.appendChild(text);
		button.onclick= function(){addEvent()};
		//monthElement coresponds to the upper(red) region of the calendar
		const monthElement = document.getElementsByClassName('month')[0];
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
