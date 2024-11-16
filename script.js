// script.js

// Проверка входа
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('#login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;

            if (username && password) {
                alert(`Добро пожаловать, ${username}!`);
                // TODO: добавить проверку логина через сервер
            } else {
                alert('Введите логин и пароль!');
            }
        });
    }
});
