/* ------------------- Проверка возраста -------------------- */
// функция для проверки возраста
function checkAge() {
	// проверяем, есть ли запись в локальном хранилище о подтверждении возраста
	if (localStorage.getItem('ageVerified')) {
		// если запись есть, то выходим из функции
		return;
	}
	// если записи нет, то показываем модальное окно
	const modalAge = document.querySelector('.modal-start');
	modalAge.classList.remove('is-hide')
	modalAge.classList.add('is-active');
	document.body.classList.remove('loc-scroll');

	// добавляем обработчик события на кнопку "да"
	const btnAge = document.querySelector('.modal-start__btn');
	btnAge.addEventListener('click', function (event) {
		event.preventDefault();

		// сохраняем значение о подтверждении возраста в локальное хранилище
		localStorage.setItem('ageVerified', true);

		// закрываем модальное окно
		modalAge.classList.remove('is-active');
		modalAge.classList.add('is-hide');
		document.body.classList.add('loc-scroll');
	});
}

// вызываем функцию проверки возраста при загрузке страницы
window.addEventListener('load', checkAge);

const page = document.querySelector(".page")

// Запрет перетаскивания ссылок и картинок
$("img, a").on("dragstart", function (event) {
	event.preventDefault();
});

/* ------------------- Modal Start -------------------- */
// const modalStart = document.querySelector(".modal-start");
// const modalStartBtn = document.querySelector(".modal-start__btn");

// if (modalStart.classList.contains('is-active')) {
// 	page.classList.add('lock-scroll');
// } else {
// 	page.classList.remove('lock-scroll');
// }


// modalStartBtn.addEventListener('click', () => {
// 	modalStart.classList.add('is-hide')
// 	modalStart.classList.remove('is-active')
// 	page.classList.remove('lock-scroll');
// });


/* ------------------- Btn Top Scroll -------------------- */
// const btnTop = {
// 	el: document.querySelector('.btn-top'),
// 	show() {
// 		this.el.classList.add('show');
// 	},
// 	hide() {
// 		this.el.classList.remove('show');
// 	},
// 	addEventListener() {
// 		window.addEventListener('scroll', () => {
// 			const scrollY = window.scrollY || document.documentElement.scrollTop;
// 			scrollY > 400 ? this.show() : this.hide();
// 		});
// 		this.el.onclick = () => {
// 			window.scrollTo({
// 				top: 0,
// 				left: 0,
// 				behavior: 'smooth'
// 			});
// 		}
// 	}
// };
// btnTop.addEventListener();

/* ------------------- Header Fixed -------------------- */
$(window).scroll(() => {
	const scrollTop = $(window).scrollTop();
	const headerTop = $('.header__top');

	if (scrollTop > 68) {
		headerTop.addClass('is-fixed');
	} else {
		headerTop.removeClass('is-fixed');
	}
});

/* ------------------- Callback Btn -------------------- */
const btnCallback = {
	el: document.querySelector('.callback'),
	show() {
		this.el.classList.add('show');
	},
	hide() {
		this.el.classList.remove('show');
	},
	addEventListener() {
		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			scrollY > 200 ? this.show() : this.hide();
		});
	}
};
btnCallback.addEventListener();


/* ------------------- Player Audio -------------------- */
const audio = new Audio('./audio/thepub.mp3');
const playButton = document.querySelector('.btn-play');
const pauseButton = document.querySelector('.btn-pause');

playButton.addEventListener('click', () => {
	audio.play();
	playButton.classList.add('is-hidden');
	pauseButton.classList.remove('is-hidden');
});

pauseButton.addEventListener('click', () => {
	audio.pause();
	pauseButton.classList.add('is-hidden');
	playButton.classList.remove('is-hidden');

});

audio.addEventListener('ended', () => {
	pauseButton.classList.add('is-hidden');
	playButton.classList.remove('is-hidden');
});


/* ------------------- Show Audio -------------------- */
const audioBtn = {
	el: document.querySelector('.player'),
	show() {
		this.el.classList.add('show');
	},
	hide() {
		this.el.classList.remove('show');
	},
	addEventListener() {
		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			scrollY > 200 ? this.show() : this.hide();
		});
	}
};
audioBtn.addEventListener();

/* ------------------- Плавный скролл по якорным ссылкам -------------------- */

const anchorlinks = document.querySelectorAll('a[href*="#"]');

for (let item of anchorlinks) {
	item.addEventListener('click', (e) => {
		e.preventDefault(); // Отменяем стандартное поведение ссылки
		const hashval = item.getAttribute('href'); // Получаем якорь из ссылки
		const target = document.querySelector(hashval); // Находим целевой элемент, к которому нужно прокрутить
		const headerOffset = document.querySelector('header').offsetHeight; // Получаем высоту шапки сайта
		const targetOffset = target.getBoundingClientRect().top + window.pageYOffset - headerOffset; // Вычисляем отступ целевого элемента от начала страницы с учетом высоты шапки
		window.scroll({
			top: targetOffset,
			behavior: 'smooth',
			block: 'start'
		});
	});
}


/* ------------------- Slider About -------------------- */
$('.slider-about').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 2000,
	pauseOnHover: true,
	cssEase: 'ease-out',
	draggable: true,
	arrows: false,
	dots: true,
	responsive: [{
		breakpoint: 1024,
		settings: {
			fade: false,
			autoplay: false,
			speed: 500
		}
	}]
});

/* ------------------- Slider Menu -------------------- */
// $('.slider-barmenu').slick({
// 	infinite: false,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: false,
// 	autoplaySpeed: 2000,
// 	speed: 500,
// 	pauseOnHover: true,
// 	cssEase: 'ease-out',
// 	draggable: true,
// 	arrows: true,
// 	dots: true,
// 	prevArrow: '<button class="slick-arrows__prev"></button>',
// 	nextArrow: '<button class="slick-arrows__next"></button>',
// 	responsive: [{
// 			breakpoint: 1025,
// 			settings: {
// 				slidesToShow: 2
// 			}
// 		},
// 		{
// 			breakpoint: 600,
// 			settings: {
// 				slidesToShow: 1,
// 				arrows: false,
// 			}
// 		}
// 	]
// });

/* ------------------- Bar Menu -------------------- */
$(window).on('load resize', function () {
	if ($(window).width() < 1025) {
		$('.slider-menu:not(.slick-initialized)').slick({
			// centerMode: true,
			dots: true,
			arrows: false,
			infinite: true,
			speed: 100,
			slidesToShow: 2,
			dots: true,
			arrows: false,
			responsive: [{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	} else {
		$(".slider-menu.slick-initialized").slick("unslick");
	}
});

/* ------------------- FancyBox Gallery -------------------- */
Fancybox.bind('[data-fancybox="gallery-about"]');
Fancybox.bind('[data-fancybox="gallery-menu"]');
Fancybox.bind('[data-fancybox="gallery-portfolio"]');


/* ------------------- Modal -------------------- */
const modalBtn = document.querySelectorAll('.js-modal-btn');
const modals = document.querySelectorAll('.modal');

function openModal(elem) {
	elem.classList.add('is-active');
	page.classList.add('lock-scroll')
}

function closeModal(e) {
	if (e.target.classList.contains('modal__close') || e.target.closest('.modal__close') || e.target.classList.contains('modal__overlay')) {
		e.target.closest('.modal').classList.remove('is-active');
		page.classList.remove('lock-scroll')
	}
}

modalBtn.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let data = e.target.dataset.modalOpen;

		modals.forEach(modal => {
			if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('.js-modal-btn').dataset.modalOpen) {
				openModal(modal)
			}
		})
	})
})

modals.forEach(modal => {
	modal.addEventListener('click', e => closeModal(e))
})

window.addEventListener('keydown', e => {
	modals.forEach(modal => {
		if (e.key === "Escape" && modal.classList.contains('is-active')) {
			modal.classList.remove('is-active');
			page.classList.remove('lock-scroll');
		}
	})
})
/* ------------------- / Modal -------------------- */


/* ------------------- Responsive Menu -------------------- */
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-burger')
if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('is-active')
		menuBtn.classList.toggle('is-active')
		page.classList.toggle('lock-scroll')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu')) {
			menu.classList.remove('is-active')
			menuBtn.classList.remove('is-active')
			page.classList.remove('lock-scroll')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('is-active')
			menuBtn.classList.remove('is-active')
			page.classList.remove('lock-scroll')
		})
	})
}

/* ------------------- Callback -------------------- */
const callback = document.querySelector('.callback');
const callbackBtn = document.querySelector('.callback__btn');
const callbackText = document.querySelector('.callback__btn-text');
const callbackPoppup = document.querySelector('.callback__poppup');
const callbackPoppupClose = document.querySelector('.callback__poppup-close');

callbackBtn.addEventListener('click', () => {
	callbackPoppup.classList.toggle('is-active');
	callbackText.classList.toggle('is-active');
});

document.addEventListener('click', (event) => {
	if (!callback.contains(event.target)) {
		callbackPoppup.classList.remove('is-active');
		callbackText.classList.remove('is-active');
	}
});

callbackPoppupClose.addEventListener('click', () => {
	callbackPoppup.classList.remove('is-active');
	callbackText.classList.remove('is-active');
});

/* ------------------- Portfolio -------------------- */
$(window).on('load resize', function () {
	if ($(window).width() < 800) {
		$('.portfolio__photos:not(.slick-initialized)').slick({
			// centerMode: true,
			dots: true,
			arrows: false,
			infinite: true,
			speed: 100,
			slidesToShow: 1
		});
	} else {
		$(".portfolio__photos.slick-initialized").slick("unslick");
	}
});

/* ------------------- Events -------------------- */
$(window).on('load resize', function () {
	if ($(window).width() < 481) {
		$('.events__list:not(.slick-initialized)').slick({
			// centerMode: true,
			dots: true,
			arrows: false,
			infinite: true,
			speed: 100,
			slidesToShow: 1
		});
	} else {
		$(".events__list.slick-initialized").slick("unslick");
	}
});

/* ------------------- Reviews -------------------- */
$(window).on('load resize', function () {
	if ($(window).width() < 800) {
		$('.reviews__list:not(.slick-initialized)').slick({
			// centerMode: true,
			dots: true,
			arrows: false,
			infinite: true,
			speed: 100,
			slidesToShow: 2,
			responsive: [{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	} else {
		$(".reviews__list.slick-initialized").slick("unslick");
	}
});