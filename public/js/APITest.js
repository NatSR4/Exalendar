const fetch = require("node-fetch");

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

// TEST function for updating events in the table
// All details provided
async function updateEventTest() {
    let request = {
        eventid: 1,
        eventtype: "homework",
        eventtitle: "Homework 1",
        eventdescription: "Make a Goodbye World program",
        eventdate: '2021-03-31 19:30:00'
    };
    let data = await fetch('http://localhost:8000/update_event', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(response => response.json());
    console.log(data);
}

// TEST functions for updating only a subset of the attributes
// using null arguments
async function updateTypeTest() {
    let request = {
        eventid: 1,
        eventtype: "exam",
    };
    let data = await fetch('http://localhost:8000/update_event', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(response => response.json());
    console.log(data);
}
async function updateTitleTest() {
    let request = {
        eventid: 1,
        eventtitle: "Homework 3",
    };
    let data = await fetch('http://localhost:8000/update_event', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(response => response.json());
    console.log(data);
}
async function updateDescriptionTest() {
    let request = {
        eventid: 1,
        eventdescription: "Make a Hello Planet program",
    };
    let data = await fetch('http://localhost:8000/update_event', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(response => response.json());
    console.log(data);
}
async function updateDateTest() {
    let request = {
        eventid: 1,
        eventdate: '2021-04-07 19:30:00'
    };
    let data = await fetch('http://localhost:8000/update_event', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(response => response.json());
    console.log(data);
}

// TEST function for deleting an event from the table
async function deleteEventTest() {
    let request = {
        eventid: 1
    }
    let data = await fetch('http://localhost:8000/delete_event', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(response => response.json());
    console.log(data);
}

(async() => {
await verificationTest();
await loginTest();
await loginFailTest();
await getEventsTest();
})();
