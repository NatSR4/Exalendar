// Event functions:

/* Get the related form values in Professors.html and add
 * the event */
// TODO: Somehow generate event ids instead of asking for input
// TODO: Instead of using classid: 1, get class from page
async function addEvent() {
    let request = {
        classid: 1,
        eventid: parseInt(document.getElementById("eventid").value),
        eventtype: document.getElementById("eventtype").value,
        eventtitle: document.getElementById("eventtitle").value,
        eventdescription: document.getElementById("eventdesc").value,
        eventdate: document.getElementById("eventdate").value
    };
    console.log(request);

    // Check if request is valid
    for (const property in request) {
        if (request[property] == null || request[property] == "") {
            console.log("Invalid form");
            return;
        }
    }

    let data = await fetch('http://localhost:8000/add_event', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(response => response.json());
    console.log(data);
}

/* Get events with the given class id and render them as text */
async function getEvents() {
    
}

//Sidebar functions:

/* Set the width of the sidebar to 250px and the left margin of the page
 * content to 250px */
function openNav() {
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

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    let bar = document.getElementById("sidebar");
    bar.style.width = null;
    // bar.style.left = null;
    // document.getElementById("main").style.marginLeft = "0";
    // document.getElementById("containCalendar").style.marginLeft="0";
    let button = document.getElementById("buttonBar");
    button.style.backgroundColor = null;
    button.style.color = null;
    button.style.left = null;
    button.style.border = null;
    document.getElementById("modal").style.display = null;
}
function opencloseNav() {
    if (document.getElementById("buttonBar").style.color == "white") closeNav();
    else openNav();
}
