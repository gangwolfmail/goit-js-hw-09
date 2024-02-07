const form = document.querySelector('.feedback-form');
const email = form.elements.email;
email.classList.add('feedback-input');
const message = form.elements.message;
message.classList.add('feedback-input');

form.addEventListener('submit', onSubmit);
form.addEventListener('input', onInput);

const LS_KEY = 'feedback-form-state';

function onSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if (!email || !message) {
    alert(`Don't leave empty fields!`);
    return;
  }
  const data = {
    email,
    message,
  };

  console.log(data);
  localStorage.removeItem(LS_KEY);
  form.reset();
}

function onInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const data = {
    email,
    message,
  };
  const zip = JSON.stringify(data);
  localStorage.setItem(LS_KEY, zip);
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    return JSON.parse(zip) || {};
  } catch (error) {
    console.error('Error parsing JSON from localStorage:', error);
    return {};
  }
}

function checkout() {
  const userData = loadFromLS(LS_KEY) || {};
  form.elements.email.value = (userData.email || '').trim();
  form.elements.message.value = (userData.message || '').trim();
}

checkout();
