const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');

const moveElement = (elem, where, order = 999) => {
	const destination = document.querySelector(where);
	const toTransfer = document.querySelector(elem);

	destination.insertBefore(toTransfer, destination.children[order]);
};

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

if (window.innerWidth <= 992) {
	moveElement('.header__actions', '.header__nav');
}

window.addEventListener('resize', () => {
	if (window.innerWidth <= 992) {
		moveElement('.header__actions', '.header__nav');
	} else {
		moveElement('.header__actions', '.header__container');
	}
});

const swiper = new Swiper('.hero__slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
