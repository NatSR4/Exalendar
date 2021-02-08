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


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("Sidebar").style.width = "250px";
  //document.getElementById("main").style.marginLeft = "250px";
  //document.getElementById("containCalendar").style.marginLeft="250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("Sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
 // document.getElementById("containCalendar").style.marginLeft="0";
}
function opencloseNav() {
  var navb=document.getElementById("Sidebar");
  if(navb.style.width === "250px")
  {
    navb.style.width = "0px"
  }
  else
  {
    navb.style.width = "250px"
  }
}