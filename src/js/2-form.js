const formData = { email: "", message: "" };
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
    const { name, value } = event.target;

    if (name in formData) {
        formData[name] = value.trim();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
});

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  if (parsedData.email) {
    form.elements.email.value = parsedData.email;
    formData.email = parsedData.email;
  }

  if (parsedData.message) {
    form.elements.message.value = parsedData.message;
    formData.message = parsedData.message;
  }
}

form.addEventListener('submit', event => {
    event.preventDefault();
  
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
  
    if (!email || !message) {
      alert('Fill please all fields');
      return;
    }
  
    formData.email = email;
    formData.message = message;
    console.log(formData);
  
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
    form.reset();
  });