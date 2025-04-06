const openButton = document.querySelector('#openButton')
const dialogBox = document.querySelector('#dialogBox')
const closeDialog = document.querySelector('#closeDialog')


openButton.addEventListener("click", function(){
       dialogBox.showModal();
})

closeDialog.addEventListener("click", () =>{
    dialogBox.close()
})