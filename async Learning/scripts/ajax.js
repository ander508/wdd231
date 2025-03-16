function resolveAfter2seconds(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Resolved");
        },2000)
    });
    
}

async function asyncCall() {
    console.log("Callling....");
    const result = await resolveAfter2seconds();
    console.log(result);
}

asyncCall();