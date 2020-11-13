
const sidebar     = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const button      = document.getElementById('sideButton');
const changePW    = document.getElementById('SubButt');
const addButton   = document.getElementById('addEntry');
const delButton   = document.getElementById('removeEntry');
const exitButton  = document.getElementById('goodbye');
const debug       = document.getElementById('debugUser');

const phrase = "This phrase will change if you \"Change your password\". This is a test function idk";

button.onclick = function() {
  sidebar.classList.toggle('sidebar_small'); 

  var div = document.getElementById("sidebarMenu");
  if (div.style.display !== 'none') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'block';
  }
}*/

changePW.onclick = function() {
  var pw1 = document.getElementById("myPwd").value;
  var pw2 = document.getElementById("myPwdPart2").value;
  if( pw1.length < 1 || pw2.length < 1) {
    return;
  }
  if (pw1 != pw2) {
    alert("Your passwords don't match, try again");
    return;
  }
  var newPW = document.getElementById("newPwd").value;
  if( newPW.length > 0)  {
    alert("This is where I would change your password. But I'm a dumdum")
  } else {
    alert("hey! You gotta put in a new password!");
  }
  return;
}

addButton.onclick = function() {
  alert("Button (2) has been pressed");
}

delButton.onclick = function() {
  alert("Button (3) has been pressed");
}

exitButton.onclick = function() {
  alert("Button (4) has been pressed");
}

// This button is for testing little things I might want to know/do
debug.onclick = function() {
  // It would seem all alerts happen before a write
  alert("This is a debug button. Do not include if you're changing the visuals")
  alert("hello, the prototype user has the following information;\nNothing yet");
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sidebarMenu").style.width = "250px";
  document.getElementById("main-content").style.marginLeft = "250px";
//  document.getElementByClassName("option-").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidebarMenu").style.width = "0";
  document.getElementById("main-content").style.marginLeft = "0";
  //document.getElementByClassName(*"option-").style.marginLeft = "0px";
}