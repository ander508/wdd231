import { temples } from "../data/temples.js";
// console.log(temples)

import { url } from "../data/temples.js";
// console.log(url)

const showHere =document.querySelector("#showHere")
const mydialog =document.querySelector("#mydialog")
const mytitle =document.querySelector("#mydialog h2")
const myclose =document.querySelector("#mydialog button")
const myinfo =document.querySelector("#mydialog p")



myclose.addEventListener('click', () => {
    mydialog.close();
})

function displayPictures(items) {
    // console.log(items);  
    items.forEach((item) => {
        console.log(item)
        
        const photo = document.createElement('img')
        photo.src=`${url}${item.path}`
        photo.alt = `${item.name}`
        
         photo.addEventListener('click', () =>showStuff(item) )
        
        
        showHere.appendChild(photo)
        
        // showHere.innerHTML += `
        //     <img src="${url}${item.path}" alt="${item.name}">
        // `
        // const img = document.querySelector('#showHere img');
        
        // img.addEventListener('click', function () {
        //     showStuff(it)
        // })
    }) 
    
}

displayPictures(temples);


function showStuff(item){
    mytitle.innerHTML = item.name
    myinfo.innerHTML = `Dedicated on ${item.dedicated} by
    ${item.person} as temple number ${item.number}`
    mydialog.showModal()
}
