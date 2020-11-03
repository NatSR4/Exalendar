const sidebar     = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const button      = document.getElementById('sideButton');
const resetButton = document.getElementById('submitNewPW');
const addButton  = document.getElementById('addEntry');
const delButton   = document.getElementById('removeEntry');
const exitButton  = document.getElementById('goodbye');



button.onclick = function() {
  sidebar.classList.toggle('sidebar_small'); 

  var div = document.getElementById("sidebarMenu");
  if (div.style.display !== 'none') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'block';
  }
}

resetButton.onclick = function() {
  alert("Button (1) has been pressed");
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