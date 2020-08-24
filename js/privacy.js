const button = document.querySelectorAll('._button');
const form = document.querySelector('.form');
const formClose = document.querySelector('.form__close');
const bodyScroll = document.querySelector('body');

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
