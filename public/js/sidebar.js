/** //Notes K.S. F22 : Wasn't able to get custom html component working in time.
 class SideBar extends HTMLElement{
	constructor(){
		super();
	}
	
	openNav() {
		let bar = document.getElementById("sidebar");
		let button = document.getElementById("buttonBar");
		bar.style.width = "calc(100vw / 6)";
		button.style.backgroundColor = "var(--sidebar)";
		button.style.color = "white";
		button.style.left = "calc(100vw / 6)";
		button.style.border = "outset white";
		button.style.borderWidth = "0px 1.5px 1.5px 0px";
		let modal = document.getElementById("modal");
		modal.style.display = "block";
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
				closeNav();
			}
		}
	}
	
	closeNav() {
		let bar = document.getElementById("sidebar");
		bar.style.width = null;
		let button = document.getElementById("buttonBar");
		button.style.backgroundColor = null;
		button.style.color = null;
		button.style.left = null;
		button.style.border = null;
		document.getElementById("modal").style.display = null;
	}
	
	opencloseNav() {
		if (document.getElementById("buttonBar").style.color == "white") closeNav();
		else openNav();
	}
}

customElements.define('side-bar', SideBar)
**/

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
// 	let bar = document.getElementById("sidebar");
// 	let button = document.getElementById("buttonBar");
// 	bar.style.width = "calc(100vw / 6)";
// 	button.style.backgroundColor = "var(--sidebar)";
// 	button.style.color = "white";
// 	button.style.left = "calc(100vw / 6)";
// 	button.style.border = "outset white";
// 	button.style.borderWidth = "0px 1.5px 1.5px 0px";
// 	let modal = document.getElementById("modal");
// 	modal.style.display = "block";
// 	window.onclick = function(event) {
// 		if (event.target == modal) {
// 			modal.style.display = "none";
// 			closeNav();
// 		}
// 	}
// }

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
// 	let bar = document.getElementById("sidebar");
// 	bar.style.width = null;
// 	let button = document.getElementById("buttonBar");
// 	button.style.backgroundColor = null;
// 	button.style.color = null;
// 	button.style.left = null;
// 	button.style.border = null;
// 	document.getElementById("modal").style.display = null;
// }
// function opencloseNav() {
// 	if (document.getElementById("buttonBar").style.color == "white") closeNav();
// 	else openNav();
// }