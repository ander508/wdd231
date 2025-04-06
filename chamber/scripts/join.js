const siteAddress = window.location.search;
console.log(siteAddress)

const myInfo = new URLSearchParams(siteAddress)

console.log(myInfo.get('first'))
console.log(myInfo.get('last'));


console.log(myInfo.get('first'));

const data = document.querySelector('.data')

const date = new Date()

const timestamp = document.querySelector('#timestamp')



data.innerHTML = `
<p><span>Name</span>: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p><span>Organizational Title</span>: ${myInfo.get('org-title')}</p>
<p><span>Email</span>: ${myInfo.get('email')}</p>
<p><span>Phone</span>: ${myInfo.get('phone')}</p>
<p><span>Organization</span>: ${myInfo.get('organization')}</p>
<p><span>Membership</span>: ${myInfo.get('membership')}</p>
<p><span>Organization Description</span>: ${myInfo.get('description')}</p>
<p><span>Timestamp</span>: ${myInfo.get('timestamp')}</p>`