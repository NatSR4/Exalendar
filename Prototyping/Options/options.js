const sidebar     = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const button      = document.getElementById('sideButton');

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
