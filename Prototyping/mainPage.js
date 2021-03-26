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
	bar.style.width = "calc(100vw / 6)";
	button.style.backgroundColor = "var(--sidebar)";
	button.style.color = "white";
	button.style.left = "calc(100vw / 6)";
	button.style.border = "outset white";
	button.style.borderWidth = "0px 1.5px 1.5px 0px";
	let modal = document.getElementById("modal");
	modal.style.display = "block";
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			closeNav();
		}
	}
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
	let bar = document.getElementById("sidebar");
	bar.style.width = null;
	// bar.style.left = null;
	// document.getElementById("main").style.marginLeft = "0";
	// document.getElementById("containCalendar").style.marginLeft="0";
	let button = document.getElementById("buttonBar");
	button.style.backgroundColor = null;
	button.style.color = null;
	button.style.left = null;
	button.style.border = null;
	document.getElementById("modal").style.display = null;
}
function opencloseNav() {
	if (document.getElementById("buttonBar").style.color == "white") closeNav();
	else openNav();
}

// Handle page load (for adding buttons etc.)
// Adds professor page to sidebar if current user is a professor
function loadMain() {
	// Onload, update the sidebar if the user is a professor
	// TODO: Need to add professor authentication
	if (true) {
    	var exalendarMenu = document.getElementById("exalendarMenu");
		exalendarMenu.innerHTML += `<li><img src="50x50.png"
			class="menuIcon">&nbsp;&nbsp;<a href="Professor/professor.html">Professor</a></li>`;
	}
}

// function modalOn() {
// 	document.getElementById("modal").style.display = "block";
// }

// function modalOff() {
// 	document.getElementById("modal").style.display = null;
// }

function openAddEvent() {
	let modal = document.getElementById("modal");
	modal.style.display = "block";
	modal.style.zIndex = 
	document.getElementById("addevent-menu").style.display = "block";
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			closeAddEvent();
		}
	}
}

function closeAddEvent() {
	document.getElementById("modal").style.display = null;
	document.getElementById("addevent-menu").style.display = null;
}