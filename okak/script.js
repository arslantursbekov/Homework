const themeSwitch = document.querySelector('.theme-switch-container');
const body = document.body;

// Загружаем сохранённую тему при загрузке страницы
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeSwitch.classList.add('active');
}

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeSwitch.classList.toggle('active');
    
    // Сохраняем выбранную тему
    const isLightTheme = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
});

const hideSidebarBtn = document.querySelector('.hide-sidebar');
const sidebar = document.querySelector('.sidebar');
const showSidebarBtn = document.querySelector('.show-sidebar-btn');

hideSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

const boardLinks = document.querySelectorAll('.board-link');

boardLinks.forEach((link) => {
    link.addEventListener('click', () => {
        boardLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

const addTaskBtn = document.querySelector('.add-task-btn');
const todoColumn = document.querySelector('.column .task-list');
addTaskBtn.addEventListener('click', () => {
    let taskTitle = prompt("Введите название задачи:");

    if (taskTitle) {
        const newCard = document.createElement('div');
        newCard.className = 'card';
        
        newCard.innerHTML = `
            <div class="card-title">${taskTitle}</div>
            <div class="card-subtasks">0 of 0 subtasks</div>
        `;

       newCard.addEventListener('click', () => {
            newCard.classList.toggle('highlight');
        });

        todoColumn.appendChild(newCard);
    } else {
        alert("Вы не ввели название!");
    }
});

const existingCards = document.querySelectorAll('.card');

existingCards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('highlight');
    });
});