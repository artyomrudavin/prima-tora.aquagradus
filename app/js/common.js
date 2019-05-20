// Tab Additionally

$(function() {

	$('.tablink').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-img').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-product').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-kg').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tablink').on('click', function(e) {

		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.specification');

		getWrapper.find('.tab').removeClass('active');
		$(this).closest('.tab').addClass('active');
		getWrapper.find('.tab-img').removeClass('active');
		getWrapper.find('.tab-img[data-tab='+dataTab+']').addClass('active');
		getWrapper.find('.tab-product').removeClass('active');
		getWrapper.find('.tab-product[data-tab='+dataTab+']').addClass('active');
		getWrapper.find('.tab-kg').removeClass('active');
		getWrapper.find('.tab-kg[data-tab='+dataTab+']').addClass('active');

	});

});

// Timer

$(function() {

	function updater(d, h, m) {
		// День сброса - 27 сентября 2015 года (и далее каждые три дня)
		var baseTime = new Date(2018, 1, 6);
		// Период сброса — 3 дня
		var period = 3*24*60*60*1000;

		function update() {
			var cur = new Date();
			// сколько осталось миллисекунд
			var diff = period - (cur - baseTime) % period;
			// console.log(diff % 1000);
			// сколько миллисекунд до конца секунды
			var millis = diff % 1000;
			diff = Math.floor(diff/1000);
			// сколько секунд до конца минуты
			var sec = diff % 60;
			if(sec < 10) sec = "0"+sec;
			diff = Math.floor(diff/60);
			// сколько минут до конца часа
			var min = diff % 60;
			if(min < 10) min = "0"+min;
			diff = Math.floor(diff/60);
			// сколько часов до конца дня
			var hours = diff % 24;
			if(hours < 10) hours = "0"+hours;
			var days = Math.floor(diff / 24);
			d.innerHTML = days;
			h.innerHTML = hours;
			m.innerHTML = min;
			// s.innerHTML = sec;

			// console.log(days);

			// следующий раз вызываем себя, когда закончится текущая секунда

			setTimeout(update, millis);
		}

		setTimeout(update, 0);

	}

	updater(document.getElementById("days"),
			document.getElementById("hours"),
			document.getElementById("minutes"));
});
