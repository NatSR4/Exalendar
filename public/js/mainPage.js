/**Kyra Sanchez Fall 2020**/
// Harshita Garg Spring 2021

import { displayedDate } from "./calendar_js/calendar";
//const displayedDate = require("./calendar_js/calendar")
const date = Date();
const submitButton = document.querySelector('button[class=submit]');
console.log(date);

submitButton.addEventListener('click', addEvent);

//Sets the header in the events sidebar to be the current date
document.getElementById("noteDate").innerHTML = (date.getMonth()+1) + " / " +date.getDate()+" / "+date.getFullYear();
//Plans: Set the date in the headser sidebar to be the current SELECTED date. 

let modalNum = 0; // for id creation

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
            class="menuIcon">&nbsp;&nbsp;<a href="professors.html">Professor</a></li>`;
    }
}

function addEvent() {
    const textAreaElement = document.querySelector('textarea[class=evenAdder');
    const event = textAreaElement.value();  
    const newList = document.createElement('div[class=noteList');
    console.log(event);
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

	let etitle = document.forms["addevent-form"]["ename"].value;
	let edate = document.forms["addevent-form"]["edate"].value;
	let etim = document.forms["addevent-form"]["etime"].value;
	let eclass = document.forms["addevent-form"]["eclass"].value;
	let edetail = document.forms["addevent-form"]["edetails"].value;
	let etype = document.forms["addevent-form"]["etype"].value;
    
    console.log(etitle);
	console.log(edate);
	console.log(etim);
	console.log(eclass);
	console.log(edetail);
	console.log(etype);
   
}
