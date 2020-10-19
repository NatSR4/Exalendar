const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
function sideResponse() {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large')
}