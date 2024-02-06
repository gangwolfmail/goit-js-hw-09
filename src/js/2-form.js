const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textArea = form.elements.message;
const localStorageKey = 'feedback-form-state';

const getItemStorage = () => {
  const parseStorage = JSON.parse(localStorage.getItem(localStorageKey));
  if (parseStorage) {
    input.value = parseStorage.email;
    textArea.value = parseStorage.message;
  }
};

getItemStorage();

form.addEventListener('input', () => {
  const formValue = {
    email: input.value.trim(),
    message: textArea.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formValue));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (input.value.trim() !== '' && textArea.value.trim() !== '') {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please, fill in all fields correctly!');
  }
});
