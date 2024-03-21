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
