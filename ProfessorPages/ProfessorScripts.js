// TEST function that fetches from the api
// get request is defined in Exalendar/index.js
// currently, just prints whatever is defined in index.js
// Requires cors blocking because sadness
async function verificationTest() {
    let data = await fetch('http://localhost:8000/professortest')
        .then(response => response.json());
    console.log(data);
}


// TEST function that adds a user to the database
// with the credentials:
// firstname:  Ex
// lastname:   Alendar
// inputEmail: exalendar@rpi.edu
// password:   exalendar123
async function signupTest() {
    let signupCredentials = {
        firstname: "Ex",
        lastname: "Alendar",
        inputEmail: "exalendar@rpi.edu",
        password: "exalendar123"
    }
    
    let data = await fetch('http://localhost:8000/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signupCredentials)
    }).then(response => response.json());
    console.log(data);
}


// TEST function for logging in using the credentials above
async function loginTest() {
    let loginCredentials = {
        inputEmail: "exalendar@rpi.edu",
        password: "exalendar123"
    };

    let data = await fetch('http://localhost:8000/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginCredentials)
    }).then(response => response.json());
    console.log(data);
}

// TODO: For invalid credentials, need to handle the username not in table case
// TEST function for logging in using invalid credentials
async function loginFailTest() {
    let loginCredentials = {
        inputEmail: "exalendar@rpi.edu",
        password: "dummy123"
    };

    let data = await fetch('http://localhost:8000/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginCredentials)
    }).then(response => response.json());
    console.log(data);
}

// TEST function for getting events from the table
async function getEventsTest() {
    let userid = {
        userid: "1"
    };
    let data = await fetch('http://localhost:8000/get_events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userid)
    }).then(response => response.json());
    console.log(data);    
}

// TEST function for adding event to table
// Due to foreign key, requires that a class with id 1 has been created.
async function addEventTest() {
    let request = {
        classid: 1,
        eventid: 1,
        eventtype: "homework",
        eventtitle: "Homework 1",
        eventdescription: "Make a Hello World program",
        eventdate: '2021-03-31 19:30:00'
    };
    let data = await fetch('http://localhost:8000/add_event', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(response => response.json());
    console.log(data);
}



//Sidebar functions:

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
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