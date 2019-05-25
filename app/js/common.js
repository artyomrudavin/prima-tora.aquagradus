// Tab Specification

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

			// следующий раз вызываем себя, когда закончится текущая секунда

			setTimeout(update, millis);
		}

		setTimeout(update, 0);

	}

	updater(document.getElementById("days"),
			document.getElementById("hours"),
			document.getElementById("minutes"));
});

// Tab Catalog

$(function() {

	// Complects

	$('.cat-tablink').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.cat-img').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.cat-price-item').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	// Tanks

	$('.tank-tablink').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tank-img').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.price-tank').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	// Complects

	$('.cat-tablink').on('click', function(e) {

		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.catalog');

		getWrapper.find('.cat-tab').removeClass('active');
		$(this).closest('.cat-tab').addClass('active');
		getWrapper.find('.cat-img').removeClass('active');
		getWrapper.find('.cat-img[data-tab='+dataTab+']').addClass('active');
		getWrapper.find('.cat-price-item').removeClass('active');
		getWrapper.find('.cat-price-item[data-tab='+dataTab+']').addClass('active');

	});

	// Tanks

	$('.tank-tablink').on('click', function(e) {

		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.catalog');

		getWrapper.find('.tank-tab').removeClass('active');
		$(this).closest('.tank-tab').addClass('active');
		getWrapper.find('.tank-img').removeClass('active');
		getWrapper.find('.tank-img[data-tab='+dataTab+']').addClass('active');
		getWrapper.find('.price-tank').removeClass('active');
		getWrapper.find('.price-tank[data-tab='+dataTab+']').addClass('active');

	});

});

// Tab Hallery

$(function() {

	$('.gal-tablink').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-gallery-box').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	// $('.tab-product').each(function(i) {
	// 	$(this).attr('data-tab', 'tab'+i)
	// });

	// $('.tab-kg').each(function(i) {
	// 	$(this).attr('data-tab', 'tab'+i)
	// });

	$('.gal-tablink').on('click', function(e) {

		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.gallery');

		getWrapper.find('.tab-g').removeClass('active');
		$(this).closest('.tab-g').addClass('active');
		getWrapper.find('.tab-gallery-box').removeClass('active');
		getWrapper.find('.tab-gallery-box[data-tab='+dataTab+']').addClass('active');
		// getWrapper.find('.tab-product').removeClass('active');
		// getWrapper.find('.tab-product[data-tab='+dataTab+']').addClass('active');
		// getWrapper.find('.tab-kg').removeClass('active');
		// getWrapper.find('.tab-kg[data-tab='+dataTab+']').addClass('active');

	});

});

// Carusel

$(function() {
	$('#car-all, #car-zavod, #car-team, #car-polza, #rev-carusel').carousel({
		touch: true
	})

	$("#car-all, #car-zavod, #car-team, #car-polza, #rev-carusel").swipe({

		swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

			if (direction == 'left') $(this).carousel('next');
			if (direction == 'right') $(this).carousel('prev');

		},

		allowPageScroll: "vertical"

	});
});