import { courses } from "./courseData.js";

console.log(courses);


function RetrieveCourse(course){
    course.forEach(item => {
        console.log(item)
        
        const li = document.querySelector('#course-list')
        
        li.addEventListener('click', ()=>{
            showDialog(item);
        })
        
        
    })
}


RetrieveCourse(courses)


function showDialog(item){
    const dialog = document.querySelector('#course-details');
    dialog.innerHTML = `
        <button class="closeModal">X</button>
        <h2>${item.subject} ${item.number}</h2>
        <h3>${item.title}</h3>
        <p><strong>Credits</strong>: ${item.credits}</p>
        <p><strong>Cerdificate</strong>: ${item.certificate}</p>
        <p><${item.description}</p>
        <p><strong>Technologies</strong>: ${item.technology.join(', ')}</p>
    `
    dialog.showModal()
    
    const closeDialog =document.querySelector('.closeModal')
    closeDialog.addEventListener('click', ()=> {
        dialog.close()
    })
}