const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
	overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
	burger.classList.remove('active');
	mobileMenu.classList.remove('active');
	overlay.classList.remove('active');
});

const swiper = new Swiper('.hero__slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
