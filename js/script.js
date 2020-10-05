const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const bodyScroll = document.querySelector('body');
const action = document.querySelector('.header__action')


action.addEventListener("click", function () {
    popup.classList.add("flex");
    bodyScroll.classList.add("stopscroll");
});

popupClose.addEventListener("click", function () {

    popup.classList.remove("flex");
    bodyScroll.classList.remove("stopscroll");
});

document.addEventListener("click", function (event) {
    if (event.target == popup) {
        popup.classList.remove("flex");
        bodyScroll.classList.remove("stopscroll");
    }
});

const button = document.querySelectorAll('._button');
const form = document.querySelector('.form');
const formClose = document.querySelector('.form__close');

button.forEach((elem) => {
    elem.addEventListener('click', function () {
        form.style.display = "flex";
        bodyScroll.classList.toggle("stopscroll");
    })
})

document.addEventListener("click", function (event) {
    if (event.target == form) {
        form.style.display = "none";
        bodyScroll.classList.toggle("stopscroll");
    }
});

formClose.addEventListener("click", function () {
    form.style.display = "none";
    bodyScroll.classList.toggle("stopscroll");
});


const prev = document.querySelector('.btn__prev');
const next = document.querySelector('.btn__next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

function activeSlide(n) {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active')
}

function activeDot(n) {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active')
}

function prepareCurrentSlide(ind) {
    activeSlide(ind);
    activeDot(ind);
}

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}
function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
})
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let interval = setInterval(nextSlide, 3500);



form.addEventListener('submit', function (event) {
    event.preventDefault();

    let formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="mail"]').value,
        phone: document.querySelector('input[name="phone"]').value
    };

    let request = new XMLHttpRequest();

    request.addEventListener('load', function () {
        console.log(request.response);
        form.innerHTML = '<h2>Спасибо за заявку! Мы перезвоним Вам в ближайшее время.</h2>';
    });

    request.open('POST', 'send.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('name=' + encodeURIComponent(formData.name) + 'email=' + encodeURIComponent(formData.email) + 'phone=' + encodeURIComponent(formData.phone));
});

