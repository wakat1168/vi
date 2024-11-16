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
// script.js

// Функция для отображения оценок
function loadGrades() {
    const gradesTable = document.querySelector('#grades-table');
    const grades = [
        { course: 'Математика', grade: '5', teacher: 'Иванов' },
        { course: 'Физика', grade: '4', teacher: 'Смирнов' },
    ];

    grades.forEach(grade => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${grade.course}</td>
            <td>${grade.grade}</td>
            <td>${grade.teacher}</td>
        `;
        gradesTable.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('grades.html')) {
        loadGrades();
    }
});
