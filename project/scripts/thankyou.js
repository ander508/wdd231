const siteAddress = window.location.search;
console.log(siteAddress)

const myInfo = new URLSearchParams(siteAddress)

console.log(myInfo.get('name'))
console.log(myInfo.get('email'));


console.log(myInfo.get('message'));

const data = document.querySelector('.data')





data.innerHTML = `
<p><span>Name</span>: ${myInfo.get('name')} </p>
<p><span>Email</span>: ${myInfo.get('email')}</p>
<p><span>Message</span>: ${myInfo.get('message')}</p>`
