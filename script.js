// script.js


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
// admin.js

// Заглушка данных (заменить на запросы к серверу)
const users = [
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin' },
    { id: 2, username: 'teacher1', email: 'teacher1@example.com', role: 'teacher' },
    { id: 3, username: 'student1', email: 'student1@example.com', role: 'student' },
];

const courses = [
    { id: 1, title: 'Математика', teacher: 'teacher1' },
    { id: 2, title: 'Физика', teacher: 'teacher1' },
];

const grades = [
    { id: 1, student: 'student1', course: 'Математика', grade: '5' },
    { id: 2, student: 'student1', course: 'Физика', grade: '4' },
];

// Переключение вкладок
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Загрузка данных
    loadUsers();
    loadCourses();
    loadGrades();
});

// Функции загрузки данных
function loadUsers() {
    const userList = document.querySelector('#user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td><button onclick="deleteUser(${user.id})">Удалить</button></td>
        `;
        userList.appendChild(row);
    });
}

function loadCourses() {
    const courseList = document.querySelector('#course-list');
    courseList.innerHTML = '';

    courses.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.title}</td>
            <td>${course.teacher}</td>
            <td><button onclick="deleteCourse(${course.id})">Удалить</button></td>
        `;
        courseList.appendChild(row);
    });
}

function loadGrades() {
    const gradesList = document.querySelector('#grades-list');
    gradesList.innerHTML = '';

    grades.forEach(grade => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${grade.id}</td>
            <td>${grade.student}</td>
            <td>${grade.course}</td>
            <td>${grade.grade}</td>
            <td><button onclick="deleteGrade(${grade.id})">Удалить</button></td>
        `;
        gradesList.appendChild(row);
    });
}

// Пример удаления (должно быть заменено на запросы к серверу)
function deleteUser(userId) {
    alert(`Удалить пользователя с ID ${userId}`);
}

function deleteCourse(courseId) {
    alert(`Удалить курс с ID ${courseId}`);
}

function deleteGrade(gradeId) {
    alert(`Удалить оценку с ID ${gradeId}`);
}
