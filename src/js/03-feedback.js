import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const formState = JSON.parse(localStorage.getItem('feedback-form-state')) ?? { email: '', message: '' };
emailInput.value = formState.email;
messageInput.value = formState.message;



emailInput.addEventListener('input', () => {
  const emailValue = emailInput.value;
  formState .email = emailValue;
});

messageInput.addEventListener('input', () => {
  const messageValue = messageInput.value;
  formState .message = messageValue;
});

form.addEventListener('input', throttle(() => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500));

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form data:', formState);
  localStorage.removeItem('feedback-form-state');
  formState = { email: '', message: '' };
  emailInput.value = '';
  messageInput.value = '';
  
});
