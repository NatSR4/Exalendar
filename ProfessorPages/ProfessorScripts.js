// TEST function that fetches from the api
// get request is defined in Exalendar/index.js
// currently, just prints whatever is defined in index.js
// Requires cors blocking because sadness
function verificationTest() {
    fetch('http://localhost:8000/professortest')
        .then(response => response.json())
        .then(data => {return data[isprofessor]});
}
