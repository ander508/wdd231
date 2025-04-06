const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// courses.forEach(function(element){
//     console.log(`${element.subject} ${element.number}`)
// })


const courseList = document.querySelector("#course-list");
const allButton = document.querySelector('#all')

courses.forEach(function (course){
    
    if (course.completed){
        courseList.innerHTML+= `<li class="completed">${course.subject} ${course.number}</li>`;
    }
    else{
        courseList.innerHTML+= `<li class="not-completed">${course.subject} ${course.number}</li>`;
    }
})




allButton.addEventListener("click", () => {
    courseList.innerHTML = ""; 

    const filteredAllCourses = courses.filter(course => 
            course.subject === "CSE" || course.subject === "WDD");
    
    const totalCredits = filteredAllCourses.reduce((sum, course) => sum + course.credits, 0);
    
    filteredAllCourses.forEach(course => {
        if (course.completed){
                    courseList.innerHTML+= `<li class="completed">${course.subject} ${course.number} - ${course.credits} credits</li>`;
                }
                else{
                    courseList.innerHTML+= `<li class="not-completed">${course.subject} ${course.number} - ${course.credits} credits</li>`;
                }
        
    });
    courseList.innerHTML += `<li class="credit"><strong>Total Credits: ${totalCredits}</strong></li>`;
});

// courses.forEach(function (course){
    
//     if (course.completed){
//         courseList.innerHTML+= `<li class="completed">${course.subject} ${course.number}</li>`;
//     }
//     else{
//         courseList.innerHTML+= `<li>${course.subject} ${course.number}</li>`;
//     }
// })


const cseButton = document.querySelector('#cse')

cseButton.addEventListener("click", () => {
    courseList.innerHTML = ""; 

    const filteredcseCourses = courses.filter(course => course.subject === "CSE");
    
    const totalCredits = filteredcseCourses.reduce((sum, course) => sum + course.credits, 0);
    
    filteredcseCourses.forEach(course => {
        if (course.completed){
            courseList.innerHTML+= `<li class="completed">${course.subject} ${course.number} - ${course.credits} credits</li>`;
        }
        else{
            courseList.innerHTML+= `<li class="not-completed>${course.subject} ${course.number} - ${course.credits} credits</li>`;
        }
    });
        courseList.innerHTML += `<li class="credit"><strong>Total Credits: ${totalCredits}</strong></li>`;

});
const wddButton = document.querySelector('#wdd')
wddButton.addEventListener("click", () => {
    courseList.innerHTML = ""; 

    const filteredwddCourses = courses.filter(course => course.subject === "WDD");
    
    const totalCredits = filteredwddCourses.reduce((sum, course) => sum + course.credits, 0);
    
    filteredwddCourses.forEach(course => {
        if (course.completed){
                    courseList.innerHTML+= `<li class="completed">${course.subject} ${course.number} - ${course.credits} credits</li>`;
                }
                else{
                    courseList.innerHTML+= `<li class="completed">${course.subject} ${course.number} - ${course.credits} credits</li>`;
                }
    });
    courseList.innerHTML += `<li class="credit"><strong>Total Credits: ${totalCredits}</strong></li>`;
});



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


    // const ul = document.querySelector('#course-list');
    // const dialog = document.querySelector('#course-details');
    
    
    // ul.addEventListener('click', (event) => {
    //     const clickedLi = event.target.closest('li'); //This determines the clicked li out of all available li
    //     if (clickedLi) {
    //         const courseName = clickedLi.textContent;
            
    //         const courseDetails = courses.find(course =>course.subject + " " 
    //             + course.number === courseName || course.subject + " " + course.number + " - " + course.credits + " " + "credits" === courseName)  // This retreives the course details on the clicked li
    //         if(courseDetails){
    //             dialog.innerHTML = '';
    //             dialog.innerHTML = `
    //                 <button class="closeModal">X</button>
    //                 <h2>${courseDetails.subject} ${courseDetails.number}</h2>
    //                 <h3>${courseDetails.title}</h3>
    //                 <p><strong>Credits</strong>: ${courseDetails.credits}</p>
    //                 <p><strong>Cerdificate</strong>: ${courseDetails.certificate}</p>
    //                 <p><${courseDetails.description}</p>
    //                 <p><strong>Technologies</strong>: ${courseDetails.technology.join(', ')}</p>
    //             `
    //             dialog.showModal(); // Open the dialog
    //             const closeDialog = document.querySelector('.closeModal');
    //             closeDialog.addEventListener("click", () => {
    //                 dialog.close();
    //             });
    //         };
   
            
    //     }
    // });
    