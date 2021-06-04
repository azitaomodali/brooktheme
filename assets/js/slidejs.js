
window.addEventListener('load', function () {
    var loader = document.querySelector('.loader');
    loader.style.display = "none";
})
/*---------------responsive menu-----------------------------*/
$(document).ready(function () {
    $('#menu-bars').click(function () {

        $('#mask').fadeIn();
        $('.menu').animate({ left: "0px" })
    })
    $('#menu-bars-times').click(function () {
        $('#mask').fadeOut();
    })
})
/*---------------index.js--------------------------*/
const slides = document.querySelector('.slide-items').children;
const slideitems = document.querySelector('.slide-items');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const totalslides = slides.length;
let index = 0;
const duration = 6000;
prev.forEach(function (button) {
    button.onclick = function () {
        slide('prev')
    }
})
next.forEach(function (button) {
    button.onclick = function () {
        slide('next')
    }
})
function slide(direction) {
    progress();
    if (direction == 'next') {
        if (index == totalslides - 1) {
            index = 0;
        } else {
            index++;
        }
    }
    if (direction == 'prev') {
        if (index == 0) {
            index = totalslides - 1;
        } else {
            index--;
        }
    }
    clearInterval(timer);
    timer = setInterval(autoslide, duration)
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
    slideinfo();
}
let width = 100 / totalslides;
function slideinfo() {
    document.querySelector('.number').innerHTML = (index + 1) + '/' + totalslides;
    document.querySelector('.inner').style.width = (index + 1) * width + '%';
}
function progress() {
    document.querySelector('.progress').innerHTML = "";
    const div = document.createElement('div');

    div.id = "progress";
    div.style.animation = "progress " + duration / 1000 + "s linear";
    document.querySelector('.progress').appendChild(div);
}
function autoslide() {
    slide('next');
}
let timer = setInterval(autoslide, duration)
slideinfo();
progress();
