document.addEventListener('DOMContentLoaded', () =>{
    const timestamp = document.querySelector('#timestamp');
    
    if (timestamp){
        const date = new Date().toLocaleString()
        timestamp.value = date
    }
})