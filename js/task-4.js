const logForm = document.querySelector('.login-form');

logForm.addEventListener('submit', (event) => {
event.preventDefault();

const emailInp = event.target.elements.email;
const passwordInp = event.target.elements.password;

const emailValue = emailInp.value.trim();
const passwordValue = passwordInp.value.trim();

if (emailValue === '' || passwordValue === '') {
alert('All form fields must be filled in');
return;
}

const formData = {
email: emailValue,
password: passwordValue
};
console.log(formData);
logForm.reset();
});

