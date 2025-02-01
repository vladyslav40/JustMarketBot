document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    // Функция для плавной анимации при прокрутке
    function revealOnScroll() {
        const windowHeight = window.innerHeight; // Высота окна браузера
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top; // Расстояние от элемента до верхней части экрана
            if (itemTop < windowHeight - 100) { // Если элемент находится в пределах видимости с небольшой задержкой
                item.classList.add("active"); // Добавляем класс для активации анимации
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll); // Отслеживаем прокрутку
    revealOnScroll(); // Инициализируем при загрузке страницы
});
