/**Kyra Sanchez Fall 2020**/

//Plans: 
/*
Get top of Events/Notes to display current date MM/DD/YYYY
*/

//object with the current Date
const date = new Date();

//Sets the header in the events sidebar to be the current date
document.getElementById("noteDate").innerHTML = (date.getMonth()+1) + " / " +date.getDate()+" / "+date.getFullYear();
//Plans: Set the date in the headser sidebar to be the current SELECTED date. 