// function resolveAfter2Seconds(x,y){
//     return new Promise((resolve) =>{
//         setTimeout(() =>{
//             resolve(x+y)
//         }, 2000)
//     })
// }

// async function f1(){
//     console.log("y")
//     const x = await resolveAfter2Seconds(10,20)
//     console.log(x)
// }

// f1()

async function fetchData() {
   const promise =  new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Data Received!")
   }, 2000);
    });
    const result = await promise;
    console.log(result)
};
fetchData();


// Fetch API Example

async function getuser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();
    console.log(user);
    
}
getuser();

// Handling Errors with try/catch

async function getData(){
    try{
        
    const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
    if (!response.ok) {
        throw new Error("Network Error");
        
    }
    else{
        data = await response.json();
        console.log(data)
    }
    
    } catch(error){
        console.error("Error:", error.message);
    }
    
}
getData()

// Running Multiple Async Tasks Concurrently

async function fetchMultiple() {
    let userPromise = fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
    let postPromise = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json());

    let [user, post] = await Promise.all([userPromise, postPromise]);

    console.log(user, post);
}

fetchMultiple();


// When Not to Use await

async function slowLoop() {
    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Iteration ${i}`);
    }
}

slowLoop();
