const openButton = document.querySelector('#openButton')
const dialogBox = document.querySelector('#dialogBox')
const dialogBoxText = document.querySelector('#dialogBox div')
const closeDialog = document.querySelector('#closeDialog')


openButton1.addEventListener("click", function(){
       dialogBox.showModal();
       dialogBoxText.innerHTML = `One Apple containes 95 calories`
})

openButton2.addEventListener("click", function(){
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Mango containes 45 calories`
})

openButton3.addEventListener("click", function(){
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Orange containes 100 calories`
})

closeDialog.addEventListener("click", () =>{
    dialogBox.close()
})