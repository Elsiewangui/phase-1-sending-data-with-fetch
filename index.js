// Add your code here
function submitData (name, email){

let FormData ={
    name: name,
    email : email
    
}
    
const configObj = {
    method : 'POST',
    headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
},
    body: JSON.stringify(FormData),
    };
      
return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    newID(data.id);
})
    .catch(error => console.error('error:', error));
}
    
function newID(id) {
const body = document.querySelector('body');
const idElement = document.createElement('p');
idElement.textContent = `ID: ${id};`
body.appendChild(idElement);
}