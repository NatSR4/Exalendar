const sidebar     = document.querySelector('.sidebar');
const mybutton    = document.getElementById('HSButton');

// Toogles Sidebar to open/close
mybutton.onclick = function() {
  alert("Sidebar Button pressed");
  sidebar.classList.toggle('sidebar_small');

  var div = document.getElementById("sidebarMenu");
  if (div.style.display !== 'none') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'block';
  }
}