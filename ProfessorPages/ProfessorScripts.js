let container = document.getElementById('classes-ctn');

/**
 * Quick function to add class to page
 * @param {string} course_id 
 * @param {number} section_num 
 * @param {string} class_name 
 * @param {string} editors 
 * @param {string} description 
 */
function addClass(course_id, section_num, class_name, editors, description) {
	container.innerHTML += `
		<div class="class" onclick="window.location.reload()">
			<h2 class="course-id">` + course_id + `</h2>
			<h2 class="section-num">` + section_num + ` SECTIONS</h2>
			<hr/>
			<h3>` + class_name + `</h3>
			<h4><b>Editor:</b> ` + editors + `</h4>
			<h4><b>Description:</b> ` + description + `</h4>
		</div>`;
}
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
}

/* Get events for the given user id and render them as text */
async function getEvents() {
    let request = {
        userid: parseInt(document.getElementById("userid").value)
    };
    
    // Check if request is valid
    if (request["userid"] == null) {
        console.log("Invalid form");
        return;
    }

    document.getElementById("list-events").innerHTML = "";

    let data = await fetch('http://localhost:8000/get_events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(response => response.json())
    .then(data => {
        // data is an array of events
        // Render it as boxes for now
        for (i = 0; i < data.length; i++) {
            let currentEvent = document.createElement("div");
            currentEvent.className = "class";
            currentEvent.innerHTML = `<h2>${data[i]["event_title"]}</h2>`
            currentEvent.innerHTML += `<hr />`
            currentEvent.innerHTML += `<h4>${data[i]["event_description"]}</h4>`
            currentEvent.innerHTML += `<h4>${data[i]["event_type"]}</h4>`
            currentEvent.innerHTML += `<h4>${data[i]["event_date"]}</h4>`
            document.getElementById("list-events").appendChild(currentEvent);
        }
    });
}

document.getElementById('modal').style.zIndex = 3;
