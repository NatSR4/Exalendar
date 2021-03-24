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
