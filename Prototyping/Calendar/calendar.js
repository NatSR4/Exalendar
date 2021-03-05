/**Kyra Sanchez Fall 2020**/
//Declaring globals needed to draw the calendar
const monthDays = document.querySelector('.days'); //The days shown on the page
const today = new Date(); // holds the current date
document.querySelector('.date p').innerHTML = today.toDateString(); //puts into the smaller text in the calendar header where the current date is and puts into it the current date
var date; //stores the date
var lastDay; //gets the last day of the month
var prevLastDay; //gets the last day of the PREVIOUS month
var firstDayIndex; //gets the day of the week of the FIRST DAY of the month (so that we know if we need to draw prev month days, to fill space)
var lastDayIndex; //gets the day of the week of the LAST DAY of the month (so we know if we need to draw NEXT month days, to fill space)
var nextDays; //basically how many days after the end of the month we need to print in order to have it line up properly. (the additional -1 is there because index starts at 0, not 1)
var firstWeekDay; //gets the first day of the week
var lastWeekDay; //gets the last day of the week
var monthBool = true; //tells the program that the calendar is in month mode
var weekBool = false; //tells the program that the calendar is in week mode

////The months of the year
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

//Calling initial calendar draw funciton
loadToday();

//Function to load week mode
function changeWeek() {
  monthBool = false;
  weekBool = true;
  loadCalendarWeek();
}

//Function to load month mode
function changeMonth() {
  monthBool = true;
  weekBool = false;
  loadCalendarMonth();
}

//Function to get the current date and load the calendar
function loadToday() {
	date = today;
	loadCalendar();
}

//Fucntion to get the next month or week and load the calendar
function loadNext() {
  if (monthBool) {
    date.setMonth(date.getMonth()+1);
    loadCalendarMonth();
  }
  else if (weekBool) {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
    loadCalendarWeek();
  }
}

//Function to get the previous month or week and load the calendar
function loadPrev() {
	  if (monthBool) {
    date.setMonth(date.getMonth()-1);
    loadCalendarMonth();
  }
  else if (weekBool) {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
    loadCalendarWeek();
  }
}
//Function to load calendar
function loadCalendarMonth() {
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
	firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	lastDayIndex = new Date(date.getFullYear(), date.getMonth()+  1, 0).getDay();
	nextDays = 7 - lastDayIndex -1;

	document.querySelector('.date h2').innerHTML = months[date.getMonth()];//selects the larger header in the calendar where the current selected month is and puts into it the name of the current/selected month
	//WHEN SELECTED MONTH FUNCTIONALITY IS ADDED, CHANGE THIS LINE OF CODE IS CHANGED TO WORK WITH IT. It should *not* change the current date, we aren't time travelers, please make a new variable for the selected date.

	let days = "";

	//basically takes the index of the day of the week of the first of the month (ex: 2 = tuesday) and uses the last day of the previous month to print the days before it until sunday of that week. Working back.
	//ex: if the first day of the month is tuesday (index = 2) then it should print out monday the 31st, then sunday the 30th, then stop. If the first day of the month is Sunday, the index is 0, it should not print other days.
	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="daybox prev-date">${prevLastDay - x + 1}</div>`;
	}

	//prints the days of the current/selected month. (ex: 1 - 30) if the day it's currently printed is TODAY, it's div is of the class "active". Today is visually different than other day and should be different than
	//selected days.
	for(let i = 1; i <= lastDay; i++){
		if (i === today.getDate() &&
			date.getMonth() === today.getMonth()
		) {
			days += `<div class="daybox active">${i}</div>`;
		} else {
			days += `<div class="daybox">${i}</div>`;
		}
	}

	//prints the days of the next month, should the previous month end on a day other than Saturday. If the month ends on a Thursday it should print out Friday the 1st and Saturday the 2nd of the next month, and no more.
	//next days and previous days should look different than the current/selected month's days
	for(let j = 1; j <= nextDays; j++){
		days += `<div class="daybox next-date">${j}</div>`;
	}

	monthDays.innerHTML = days;
	let dayboxes = document.getElementsByClassName('daybox');
	if ((firstDayIndex + lastDay + nextDays) / 7 > 5) {
		for (let i = 0; i < dayboxes.length; ++i) {
			dayboxes[i].style.height = "calc((100vh - 120px) / 6)";
		}
	} else {
		for (let i = 0; i < dayboxes.length; ++i) {
			dayboxes[i].style.height = null;
		}
	}
}

//Function to load Calendar Week
function loadCalendarWeek() {
  //changing the global calendar vars
  lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
  firstWeekDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
  lastWeekDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7 - date.getDay());
  document.querySelector('.date h2').innerHTML = months[date.getMonth()];//selects the larger header in the calendar where the current selected month is and puts into it the name of the current/selected month

  //days inner html variable
  let days = "";

  //looping through dates
  let i = firstWeekDay.getDate();
  while (i != lastWeekDay.getDate()) {
    console.log(i);
    //case for previous days
    if (firstWeekDay.getMonth() == prevLastDay.getMonth() && i > 7) {
      days +=`<div class="prev-date">${i}</div>`;
    }
    //case for next days
    else if (lastWeekDay.getMonth() == lastDay.getMonth() + 1 && i < 7) {
      days += `<div class = "next-date">${i}</div>`;
    }
    //normal case
    else {
      days += `<div>${i}</div>`;
    }

    // updating inner html
    monthDays.innerHTML = days;

    // setting i to 1 at the edge cases
    if (i == prevLastDay.getDate() && firstWeekDay.getMonth() == prevLastDay.getMonth()) {
      i = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
    }
    else if (i == lastDay.getDate() && lastWeekDay.getMonth() == lastDay.getMonth() + 1) {
      i = new Date(date.getFullYear(), date.getMonth() + 1, 1).getDate();
    }
    // normal cases
    else {
      i++;
    }
  }
}