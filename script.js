// Функция для обновления таймера
function updateTimer() {
    // Установите целевую дату для обратного отсчета (год, месяц (от 0 до 11), день, часы, минуты, секунды)
    const targetDate = new Date("2026-01-01T00:00:00");
  
    // Получите текущую дату и время
    const currentDate = new Date();
  
    // Вычислите разницу между целевой датой и текущей датой
    const diff = targetDate - currentDate;
  
    // Преобразуйте разницу в дни, часы, минуты и секунды
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    // Отобразите оставшееся время на веб-странице
    const timerElement = document.getElementById('timer');
    timerElement.innerHTML = `
      <div>${days} days</div>
      <div>${hours} hours</div>
      <div>${minutes} minutes</div>
      <div>${seconds} seconds</div>
    `;
  }
  
  // Обновите таймер каждую секунду
  setInterval(updateTimer, 1000);
  
  // Начальное обновление таймера после загрузки страницы
  updateTimer();