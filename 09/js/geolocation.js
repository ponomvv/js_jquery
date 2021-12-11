﻿// В браузере Chrome в автономном режиме данный пример не работает (но функционирует на веб-сервере).
// В других браузерах может появиться запрос о получении разрешения на определение местоположения.
// Процесс определения местоположения занимает некоторое время.

var elMap = document.getElementById('loc');                 // HTML-элемент
var msg = 'Определение местонахождения невозможно.';    // Сообщение об отсутствии данных о местоположении

if (Modernizr.geolocation) {                                // Поддерживается ли геолокация
  navigator.geolocation.getCurrentPosition(success, fail);  // Запрашиваем координаты
  elMap.textContent = 'Определение местонахождения...';               // Уведомляем об операции определения...
} else {                                                    // Не поддерживается
  elMap.textContent = msg;                                  // Добавляем сообщение
}

function success(location) {                                // Получили местоположение
  msg = '<h3>Долгота:<br>';                               // Создаем сообщение
  msg += location.coords.longitude + '</h3>';               // Добавляем долготу
  msg += '<h3>Широта:<br>';                               // Создаем сообщение
  msg += location.coords.latitude + '</h3>';                // Добавляем широту
  elMap.innerHTML = msg;                                    // Выводим местоположение
}

function fail(msg) {                                        // Не получили местоположение
  elMap.textContent = msg;                                  // Выводим сообщение
  console.log(msg.code);                                    // Записываем ошибку
}