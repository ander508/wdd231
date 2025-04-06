// const courseContainer = document.querySelector('#course-list');


// courseContainer.addEventListener('click', (event) => {
//     if (event.target.tagName === 'LI') {
//         const courseText = event.target.textContent.split(" ");
//         const subject = courseText[0];
//         const number = parseInt(courseText[1]);

//         const selectedCourse = courses.find(course => 
//             course.subject === subject && course.number === number
//         );

//         if (selectedCourse) {
//             displayCourseDetails(selectedCourse);
//         }
//     }
// });



// const complete = document.querySelector('.completed');
// const courseDetails = document.querySelector('#course-details');


// function displayCourseDetails(course){
//     courseDetails.innerHTML = "";
//     courseDetails.innerHTML = `
//         <button class="closeModal">X</button>
//         <h2>${course.subject} ${course.number}</h2>
//         <h3>${course.title}</h3>
//         <p><strong>Credits</strong>: ${course.credits}</p>
//         <p><strong>Cerdificate</strong>: ${course.certificate}</p>
//         <p><${course.description}</p>
//         <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
//     `;
//         courseDetails.showModal();
    
//         const closeButton = courseDetails.querySelector('.closeModal');
//         closeButton.addEventListener('click', () => {
//         courseDetails.close();
// });
 
// }


