function resolveAfter2Seconds(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve()
        },2000)
    })
}

async function f1(){
    const thenable = {
        then(resolve){
            resolve('resolved')
        },
    };
    console.log(await thenable)
}

f1()

// They can also be rejected:

async function f2() {
    const thenable = {
      then(_, reject) {
        reject(new Error("rejected!"));
      },
    };
    await thenable; // Throws Error: rejected!
  }
  
  f2();
  