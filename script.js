document.getElementById('leadform').addEventListener('submit', function (event){
event.preventDefault();
const name =document.getElementById('name').value;
const email = document.getElementById('email').value;
const socialmedia= document.getElementById('socialmedia').value;

//aqui voce pode adicionar a logica para enviar ao banco de dados

alert(`Nome: ${name}\nEmail: ${email}\nRede Social: ${socialmedia}`);


});