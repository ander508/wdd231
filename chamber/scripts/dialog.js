const openButton  = document.querySelector('#openButton')
const dialogBox  = document.querySelector('#dialogBox')
const dialogBoxText  = document.querySelector('#dialogBox div')
const closeButton  = document.querySelector('#closeButton')


openButton1.addEventListener('click',  () => {
    
    dialogBoxText.innerHTML=`
    <h2>Non Profit Membership Benefits:</h2>
    <p>No Advert</p>
    <p>Celebrate You Birthday</p>
    <p>Special Annual Training</p>
    <p>Cost: Free</p>
    `;
    dialogBox.showModal()
})
openButton2.addEventListener('click',  () => {
    
    dialogBoxText.innerHTML=`
    <h2>Bronze Membership Benefits:</h2>
    <p>1: Free expense Vacation</p>
    <p>2: We Celebrate Your Birthday</p>
    <p>3: Special Annual Training</p>
    <p>4: Advertising</p>
    <p>5: Cost: 1,000/Year</p>
    `;
    dialogBox.showModal()
})
openButton3.addEventListener('click',  () => {
    dialogBoxText.innerHTML=`
    <h2>Silver Membership Benefits:</h2>
    <p>1: Free expense Vacation</p>
    <p>2: We Celebrate Your Birthday</p>
    <p>3: Special Annual Training</p>
    <p>4: Headline Advertising</p>
    <p>5: Cost: 1,500/Year</p>
    `;
    dialogBox.showModal()
})
openButton4.addEventListener('click',  () => {
    dialogBoxText.innerHTML=`
    <h2>Gold Membership Benefits:</h2>
    <p>1: Free expense Vacation</p>
    <p>2: We Celebrate Your Birthday</p>
    <p>3: Special Annual Training</p>
    <p>4: Headline Advertising</p>
    <p>5: Cost: 2,000/Year</p>
    <p>6: Special Event Discount</p>
    `;
    dialogBox.showModal()
})
closeButton.addEventListener('click',  () => {
    dialogBox.close()
})

