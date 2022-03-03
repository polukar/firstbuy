
document.addEventListener("DOMContentLoaded", () => {


  // header

  document.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('.header');
    if (header) {
      if (scrollTop > 5) {
        header.classList.add('header--fix');
      } else {
        header.classList.remove('header--fix');

      }
    }
  })

  // sliders

  if (window.innerWidth < 768) {
    new Swiper('.service__slider', {
      spaceBetween: 20,
      slidesPerView: "auto",
    });
    new Swiper('.advantages__slider', {
      spaceBetween: 20,
      slidesPerView: "auto",
    });
    new Swiper('.numbers__slider', {
      spaceBetween: 20,
      slidesPerView: "auto",
    });
  }


  const sliderReports = new Swiper('.reports__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    type: 'progressbar',
    clickable: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reports__slider .next',
      prevEl: '.reports__slider .prev',
    },
    breakpoints: {
      980: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });

  const sliderReview = new Swiper('.review__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    type: 'progressbar',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.review__slider .next',
      prevEl: '.review__slider .prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    }
  });


  // accarrdeon

  let slideUp = (target, duration = 500) => {

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }

  let slideDown = (target, duration = 500) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }


  const accardeon = document.querySelectorAll('.accardeon');

  if (accardeon) {
    const accardeonItem = document.querySelectorAll('.accardeon__item');
    accardeonItem.forEach(elem => {
      const main = elem.querySelector('.accardeon__main');
      const drop = elem.querySelector('.accardeon__drop');

      main.addEventListener('click', () => {
        if (main.classList.contains('active')) {
          main.classList.remove('active');
          slideUp(drop);
        } else {
          main.classList.add('active');
          slideDown(drop);
        }
      })
    })
  }
  // маска на инпут телефона
  var phoneMask = IMask(
    document.querySelector('.phone-mask'), {
    mask: '+{7}(000)000-00-00'
  }
  );

  // проверка на контент в инпуте, если есть то оставляем активным
  const placeholder = (elem, placeholder) => {
    elem.addEventListener('keyup', (el) => {
      const val = elem.value.length;
      if (val == 0) {
        placeholder.classList.remove('active');
      } else {
        placeholder.classList.add('active');
      }
    })
  }

  const textarea = document.querySelectorAll('.textarea');
  if (textarea) {
    textarea.forEach(elem => {
      const place = elem.querySelector('.form__placeholder');
      const input = elem.querySelector('textarea');
      placeholder(input, place);
    })
  }

  const inputText = document.querySelectorAll('.input');
  if (inputText) {
    inputText.forEach(elem => {
      const place = elem.querySelector('.form__placeholder');
      const input = elem.querySelector('input[type="text"]');
      placeholder(input, place);
    })
  }
});


