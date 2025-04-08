const messageContainer = document.querySelector('#visit-message');

const MILLISECOND_IN_A_DAY = 1000 * 60 * 60 * 24;

const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

let message = "";
let dayDifference = 0;

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = now - Number(lastVisit);
    dayDifference = timeDifference / MILLISECOND_IN_A_DAY;

    if (dayDifference < 1) {
        message = "Back so soon! Awesome!";
    } else {
        const wholeDays = Math.floor(dayDifference);
        
        if (wholeDays === 1){
            message =`You last visited ${wholeDays} day ago.` 
        }
    else{
        message =`You last visited ${wholeDays} days ago.` 
        
    }
}
}
messageContainer.textContent = message;

function displayInSeconds(){
    setTimeout(() =>{
messageContainer.textContent = "";
        
    },10000)
}
displayInSeconds()
localStorage.setItem('lastVisit', now);
