/**Kyra Sanchez Fall 2020**/
// Harshita Garg Spring 2021

//object with the current Date
const date = new Date();

//Sets the header in the events sidebar to be the current date
document.getElementById("noteDate").innerHTML = (date.getMonth()+1) + " / " +date.getDate()+" / "+date.getFullYear();
//Plans: Set the date in the headser sidebar to be the current SELECTED date. 


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
	let bar = document.getElementById("sidebar");
	let button = document.getElementById("buttonBar");
	bar.style.width = "250px";
	//document.getElementById("main").style.marginLeft = "250px";
	//document.getElementById("containCalendar").style.marginLeft="250px";
	button.style.backgroundColor = "var(--sidebar)";
	button.style.color = "white";
	button.style.left = "250px";
	button.style.border = "outset white";
	button.style.borderWidth = "0px 1.5px 1.5px 0px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("sidebar").style.width = "0";
	// document.getElementById("main").style.marginLeft = "0";
	// document.getElementById("containCalendar").style.marginLeft="0";
	let button = document.getElementById("buttonBar");
	button.style.backgroundColor = "white";
	button.style.color = "black";
	button.style.left = "15px";
	button.style.border = "none";
}
function opencloseNav() {
	if (document.getElementById("sidebar").style.width === "250px") closeNav();
	else openNav();
}