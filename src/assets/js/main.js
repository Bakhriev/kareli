const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');
const body = document.body;

const form = document.querySelector('.form-wrapper');
const formCloseBtn = document.querySelector('.form__close-btn');
const formTriggerBtns = document.querySelectorAll('[data-trigger="form"]');

formTriggerBtns.forEach(btn => {
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

initMap();

async function initMap() {
	await ymaps3.ready;

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
		ymaps3;

	const map = new YMap(document.getElementById('map'), {
		location: {
			center: [64.456276, 39.766781],
			zoom: 10,
		},
		copyrights: false,
		margin: calcMapMargin(),
	});
	const balloonContent = document.createElement('div');
	const geopin = document.createElement('div');

	const geoMarker = new YMapMarker(
		{
			coordinates: [64.456276, 39.766781],
			draggable: false,
		},
		geopin
	);

	const balloonMarker = new YMapMarker(
		{
			coordinates: [64.456276, 39.766781],
			draggable: false,
		},
		balloonContent
	);

	map.addChild(new YMapDefaultSchemeLayer());
	map.addChild(new YMapDefaultFeaturesLayer());
	// Markers
	map.addChild(balloonMarker);
	map.addChild(geoMarker);

	//
	balloonContent.innerHTML = `
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
	`;

	geopin.innerHTML = `
	<svg class='balloon-toggle' width="50" height="64" viewBox="0 0 50 64" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M44.9916 40.0137C48.1362 35.833 50 30.6342 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 30.6342 1.86379 35.833 5.00845 40.0137L5 40.0221L25 63.5L45 40.0221L44.9916 40.0137Z" fill="#147470"/>
	<circle cx="25" cy="25" r="8" fill="white"/>
	</svg>
	`;

	const balloonToggle = document.querySelector('.balloon-toggle');
	const balloon = document.querySelector('.balloon-content');
	balloonToggle.addEventListener('click', () => {
		balloon.classList.toggle('hide');
	});
}

const calcMapMargin = () => {
	const center = window.innerWidth / 2 + 200;
	if (window.innerWidth <= 600) return [0, center, 300, 0];
	if (window.innerWidth <= 768) return [0, center, 300, 0];
	if (window.innerWidth <= 1200) return [0, center, 300, 0];
	return [0, center, 0, 0];
};

const heroSlider = new Swiper('.hero__slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const productSliderThumb = new Swiper('.product__slider-thumb', {
	spaceBetween: 20,
	slidesPerView: 'auto',
	freeMode: true,
	watchSlidesProgress: true,
});

const productSliderMain = new Swiper('.product__slider-main', {
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	thumbs: {
		swiper: productSliderThumb,
	},
});

const phone = document.getElementById('phone');
const orderPhone = document.getElementById('order-phone');

const maskOptions = {
	mask: '+7(000)000-00-00',
	lazy: true,
};

if (phone !== null) {
	const mask = new IMask(phone, maskOptions);
}

if (orderPhone !== null) {
	const mask1 = new IMask(orderPhone, maskOptions);
}
