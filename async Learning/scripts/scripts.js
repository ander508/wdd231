// console.log("Hi");


// setTimeout(function(){
//     console.log("Asychronous Result");
// }, 5000);

// console.log("Synchrounous Result");

function  walkDog() {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const dogWalked = true;
            
            if (dogWalked){
                resolve("you walk the doy");
            }
            else{
                reject("You didn't walk the dog");
            }
        }, 1500);
        
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const cleanKitchen = false;
            if (cleanKitchen) {
                resolve("You cleaned the Kitchen");
            }
            else{
                reject("You didn't clean the Kitchen");
            }
        }, 2000)
       
    })
}
async function doChores() {
    
    try{
        const walkDogResult= await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult= await cleanKitchen();
        console.log(cleanKitchenResult);
    }
    catch(error){
        console.error(error);
    }
    
}

doChores()