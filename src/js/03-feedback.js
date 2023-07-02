
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// form.addEventListener('input', getData)

// const formState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};


const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    const localStorageData ={};
const getData = function(emailValue,messageValue){
    localStorageData.email=emailValue;
    localStorageData.message = messageValue;
    
    
    localStorage.setItem('feedback-form-state', JSON.stringify(localStorageData));
   };
form.addEventListener('input',getData);
console.log(emailInput.value)