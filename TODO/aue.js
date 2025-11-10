function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

// Закрытие dropdown при клике вне его
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Выбор пункта из списка
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
        // Убираем активный класс у всех пунктов
        document.querySelectorAll('.dropdown-item').forEach(i => {
            i.classList.remove('active');
        });
        // Добавляем активный класс выбранному пункту
        this.classList.add('active');
        // Обновляем текст в toggle
        document.querySelector('.dropdown-toggle').textContent = this.textContent;
        // Закрываем dropdown
        document.querySelector('.dropdown').classList.remove('active');
    });
});





document.getElementById('themeToggle').addEventListener('click', function (o) {
    currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
});


