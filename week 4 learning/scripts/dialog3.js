const openButton  = document.querySelector('#openButton')
const dialogBox  = document.querySelector('#dialogBox')
const dialogBoxText  = document.querySelector('#openButton div')
const closeButton  = document.querySelector('#closeButton')


openButton1.addEventListener('click',  () => {
    dialogBox.showModal()
})
openButton2.addEventListener('click',  () => {
    dialogBox.showModal()
})
openButton3.addEventListener('click',  () => {
    dialogBox.showModal()
})
closeButton.addEventListener('click',  () => {
    dialogBox.close()
})

