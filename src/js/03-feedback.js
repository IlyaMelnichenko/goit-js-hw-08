import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const formState = JSON.parse(localStorage.getItem('feedback-form-state')) ?? { email: '', message: '' };
emailInput.value = formState.email;
messageInput.value = formState.message;

const localStorageData = {};

emailInput.addEventListener('input', () => {
  const emailValue = emailInput.value;
  localStorageData.email = emailValue;
});

messageInput.addEventListener('input', () => {
  const messageValue = messageInput.value;
  localStorageData.message = messageValue;
});

form.addEventListener('input', throttle(() => {
  localStorage.setItem('feedback-form-state', JSON.stringify(localStorageData));
}, 500));

form.addEventListener('submit', function(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log('Form data:', formState);
});
