const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');

const form = document.querySelector('.form-wrapper');
const formCloseBtn = document.querySelector('.form__close-btn');
const askQuestionBtns = document.querySelectorAll('[data-trigger="form"]');
const body = document.body;

askQuestionBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		form.classList.add('active');
		body.classList.add('disable-scroll');
		overlay.classList.add('active');
	});
});

formCloseBtn.addEventListener('click', () => {
	form.classList.remove('active');
	body.classList.remove('disable-scroll');
	overlay.classList.remove('active');
});

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
	overlay.classList.toggle('active');
	body.classList.toggle('disable-scroll');
});

overlay.addEventListener('click', () => {
	burger.classList.remove('active');
	mobileMenu.classList.remove('active');
	overlay.classList.remove('active');
	body.classList.remove('disable-scroll');
});

const swiper = new Swiper('.hero__slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const productSliderThumb = new Swiper('.product__slider', {
	spaceBetween: 20,
	slidesPerView: 'auto',
	freeMode: true,
	watchSlidesProgress: true,
});

const productSlider = new Swiper('.product__slider2', {
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	thumbs: {
		swiper: productSliderThumb,
	},
});

const element = document.getElementById('phone');
const maskOptions = {
	mask: '+7(000)000-00-00',
	lazy: true,
};

const mask = new IMask(element, maskOptions);

// Инициализация карты
function initMap() {
	const map = new ymaps.Map('map', {
		center: [61.7866, 34.3596],
		zoom: 16,
		controls: [],
	});

	const geoLocationPin = new ymaps.Placemark(
		[61.7866, 34.3596],

		{
			balloonContentBody: `
			<div class="balloon-content">
			<div class="balloon-content__icon"></div>
			<div class="balloon-content__inner">
				<div class="balloon-content__title">Производство в Карелии</div>
				<div class="balloon-content__address">
					185014 г. Петрозаводск, Республика Карелия, Россия
				</div>
				<div class="balloon-content__socials">
					<a href="tel:+79213024630" class="balloon-content__number"
						>+7 921 302-46-30</a
					>
					<a
						href="mailto:pavel.mfcn@yandex.ru"
						class="balloon-content__email"
						>pavel.mfcn@yandex.ru</a
					>
				</div>
				<div class="balloon-content__tagline">Режим работы</div>
				<div class="balloon-content__work-time">пн-пт: 10:00—19:00</div>
				<div class="balloon-content__work-time">сб-вс: 11:00—19:00</div>
			</div>
		</div>
			`,
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './assets/img/svg/geopin.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40],
			closeButton: false,
			hasHint: false,
			balloonCloseButton: false,
			hideIconOnBalloonOpen: false,
		}
	);

	// Добавление метки на карту
	map.geoObjects.add(geoLocationPin);
}

// Инициализация Yandex.Maps API

document.addEventListener('DOMContentLoaded', () => {
	ymaps.ready(initMap);
});
