/*eslint-env es6*/

const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
	if(window.scrollY > 450) {
		headerEl.classList.add('header-scrolled');
	}
	else if (window.scrollY <= 450) {
		headerEl.classList.remove('header-scrolled');
	}
});