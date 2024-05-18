const nameInp = document.getElementById('name-input');
const nameOutp = document.getElementById('name-output');

nameInp.addEventListener('input', () => {
const trimmedValue = nameInp.value.trim();
if (trimmedValue === '') {
nameOutp.textContent = 'Anonymous';
} else {
nameOutp.textContent = trimmedValue;
}
});
