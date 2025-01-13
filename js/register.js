const form = document.querySelector('.login-form');
const emailInput = document.getElementById('email');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const agreementCheckbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-button');
const errorMessagesContainer = document.getElementById('error-messages');

submitButton.addEventListener('click', (event) => {
event.preventDefault(); // Предотвращает отправку формы
errorMessagesContainer.innerHTML = ''; // Очищаем предыдущие сообщения

const errors = [];
if (!emailInput.value.trim()) errors.push('Введите e-mail');
if (!firstNameInput.value.trim()) errors.push('Введите имя');
if (!lastNameInput.value.trim()) errors.push('Введите фамилию');
if (!phoneInput.value.trim()) errors.push('Введите телефон');
if (!passwordInput.value.trim()) errors.push('Введите пароль');
if (passwordInput.value !== confirmPasswordInput.value) errors.push('Пароли не совпадают');
if (!agreementCheckbox.checked) errors.push('Необходимо согласие на обработку данных');


if (errors.length > 0) {
const errorMessageList = document.createElement('ul');
errors.forEach(error => {const listItem = document.createElement('li');
listItem.textContent = error;
errorMessageList.appendChild(listItem);
});
errorMessagesContainer.appendChild(errorMessageList);
} else {
// Здесь вы можете добавить код для отправки данных на сервер
alert('Регистрация прошла успешно!');
}
});