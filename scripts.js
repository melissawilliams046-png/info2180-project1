/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){
const newsForm = document.querySelector('.newsletter form');
newsForm.addEventListener("submit", function(event){
event.preventDefault();
const email =document.getElementById('email').value;
const message = document.querySelector('.message');
if (email ==""){
message.textContent = "Please enter a valid email address.";
}
else{ message.textContent = "Thank you! Your email address "+ email +" has been added to our mailing list!";

}
});
});