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

document.getElementById('modal').style.zIndex = 3;