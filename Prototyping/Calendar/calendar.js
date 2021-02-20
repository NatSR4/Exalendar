/**Kyra Sanchez Fall 2020**/
//Declaring the current date
const date = new Date();

////The months of the year
const months = [
  "January",
  "Feburary",
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

//This section contains the variables needed to calculate how to draw the calendar//

monthDays = document.querySelector('.days')

lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); //gets the last day of the month

prevLastDay = new Date(date.getFullYear(), date.getMonth() - 1, 0).getDate(); //gets the last day of the PREVIOUS month

firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay(); //gets the day of the week of the FIRST DAY of the month (so that we know if we need to draw prev month days, to fill space)

lastDayIndex = new Date(date.getFullYear(), date.getMonth()+  1, 0).getDay(); //gets the day of the week of the LAST DAY of the month (so we know if we need to draw NEXT month days, to fill space)

nextDays = 7 - lastDayIndex -1;//basically how many days after the end of the month we need to print in order to have it line up properly. (the additional -1 is there because index starts at 0, not 1)


////


document.querySelector('.date h2').innerHTML = months[date.getMonth()];//selects the larger header in the calendar where the current selected month is and puts into it the name of the current/selected month
//WHEN SELECTED MONTH FUNCTIONALITY IS ADDED, CHANGE THIS LINE OF CODE IS CHANGED TO WORK WITH IT. It should *not* change the current date, we aren't time travelers, please make a new variable for the selected date. 

document.querySelector('.date p').innerHTML = date.toDateString();//puts into the smaller text in the calendar header where the current date is and puts into it the current date

let days = "";

//basically takes the index of the day of the week of the first of the month (ex: 2 = tuesday) and uses the last day of the previous month to print the days before it until sunday of that week. Working back.
//ex: if the first day of the month is tuesday (index = 2) then it should print out monday the 31st, then sunday the 30th, then stop. If the first day of the month is Sunday, the index is 0, it should not print other days.
for (let x = firstDayIndex; x > 0; x--) {

    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    monthDays.innerHTML = days;
  }

  
//prints the days of the current/selected month. (ex: 1 - 30) if the day it's currently printed is TODAY, it's div is of the class "active". Today is visually different than other day and should be different than
//selected days.
for(let i = 1; i <= lastDay; i++){
    if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="active">${i}</div>`;
      } else{
        days +=`<div>${i}</div>`;
      }
        monthDays.innerHTML = days;
}

//prints the days of the next month, should the previous month end on a day other than Saturday. If the month ends on a Thursday it should print out Friday the 1st and Saturday the 2nd of the next month, and no more.
//next days and previous days should look different than the current/selected month's days
for(let j = 1; j <= nextDays; j++){
    days += `<div class = "next-date">${j}</div>`;
    monthDays.innerHTML = days;

}

