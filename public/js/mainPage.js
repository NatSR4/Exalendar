/**Kyra Sanchez Fall 2020**/
// Harshita Garg Spring 2021

//object with the current Date
const date = new Date();

//Sets the header in the events sidebar to be the current date
document.getElementById("noteDate").innerHTML = (date.getMonth()+1) + " / " +date.getDate()+" / "+date.getFullYear();
//Plans: Set the date in the headser sidebar to be the current SELECTED date. 

let modalNum = 0; // for id creation

import Connection from 'mysql2/typings/mysql/lib/Connection.js';
import query from './query.js';

function addModal() {
	document.body.innerHTML += `<div class="modal" id="modal` + ++modalNum + `"></div>`;
}

// Handle page load (for adding buttons etc.)
// Adds professor page to sidebar if current user is a professor
function loadMain() {
	// Onload, update the sidebar if the user is a professor
	// TODO: Need to add professor authentication
	if (true) {
    	var exalendarMenu = document.getElementById("exalendarMenu");
		exalendarMenu.innerHTML += `<li><img src="50x50.png"
			class="menuIcon">&nbsp;&nbsp;<a href="professors">Professor</a></li>`;
	}
}

function openAddEvent() {
	let modal = document.getElementById("modal");
	modal.style.display = "block";
	modal.style.zIndex = 3;
	document.getElementById("addevent-menu").style.display = "block";
	document.getElementById("addevent-menu").style.zIndex = 4;
	window.onclick = function(event) {
		if (event.target == modal) closeAddEvent();
	}
}

function closeAddEvent() {
	document.getElementById("modal").style.display = null;
	document.getElementById("modal").style.zIndex = null;
	document.getElementById("addevent-menu").style.display = null;
	document.getElementById("addevent-menu").style.zIndex = null;
	let newevent = new query(Connection)
	newevent.simple_insert(classes, [classid, class_name], [69420, 'Test'])
}