// Получить случайное число от 0 до size-1
var getRandomCord = function (size) {
return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (target)
var getDistance = function (event, target) {
	var difX = event.offsetX - target.x;
	var difY = event.offsetY - target.y;
	return Math.sqrt((difX * difX) + (difY * difY));
};
// Получить для расстояния строку подсказки
var getDistanceTool = function (distance) {
	if (distance < 20) {
		return "Горячо! Сделано кликов - "+clicks;
	} else if (distance < 40) {
		return "Очень жарко! Сделано кликов - "+clicks;
	} else if (distance < 80) {
		return "Жарко! Сделано кликов - "+clicks; 
	} else if (distance < 160) {
		return "Тепло! Сделано кликов - "+clicks; 
	} else if (distance < 320) {
		return "Холодно! Сделано кликов - "+clicks; 
	} else if (distance < 500) {
		return "Морозно! Сделано кликов - "+clicks; 
	} else {
		return "Антарктида! Сделано кликов - "+clicks; 
	};
};
// Создаем переменные
var width = 600;
var height = 600;
var clicks = 0;
// Случайная позиция клада
var target = {
	x: getRandomCord(width),
	y: getRandomCord(height)
};
// Добавляем элементу img обработчик клика
alert('Кликайте по карте и смотрите на текст снизу, чтобы найти клад!');
alert('Но будьте аккуратны, ведь у Вас всего 40 кликов :)')
$("#map").click(function (event) {
	clicks++;
	// Получаем расстояние от места клика до клада
	var distance = getDistance(event, target);
	// Преобразуем расстояние в подсказку
	var distanceTool = getDistanceTool(distance);
	// Записываем в элемент #distance новую подсказку
	$("#txt").text(distanceTool);
	// Проигрыш
	if (clicks === 20) {
		alert('Осторожно у Вас осталось 20 кликов');
	} else if (clicks === 30) {
		alert('Упс, если через 10 кликов клад не найдётся - Вы проиграете')
	} else if (clicks === 40) {
		alert('К сожалению Вы не справились, клад не найден. Перезагрузите страницу для того, чтобы попробовать снова!');
	};
	// Если клик был достаточно близко, поздравляем с победой
	if (distance < 5) {
		alert("Клад найден! Сделано кликов: " + clicks);
		alert('Перезагрузите страницу для обновления игры!');
	};
});