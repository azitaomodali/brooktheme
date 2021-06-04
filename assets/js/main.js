window.addEventListener('load', function () {
    /*--------------------loader-------------------------*/
    var loader = document.querySelector('.loader');
    loader.style.display = "none";




    disableLazyLoadOnMonileAndTablet();
    /*--------------------check URL-------------------------*/
    var checkURL;
    if (checkURL = window.location.href.includes("about-us.html")) {
        aboutUs();
    }
});
/*---------------about-us--------------------------*/
function aboutUs() {
    // What we do accordion
    var accordion = document.getElementsByClassName('accordion');
    for (var i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {

            var panel = this.nextElementSibling;
            this.classList.toggle('active')


            if (panel.style.height) {
                panel.style.height = null;


            } else {
                panel.style.height = panel.scrollHeight + "px";

            }

        })
    };
    // Slider 1
    var swiper = new Swiper('.swiper1', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '#swiper-button-next-1',
            prevEl: '#swiper-button-prev-1',
        },
        breakpoints: {
            414: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            980: {
                slidesPerView: 3,
            },
        }
    });
    // Slider Team members (Swiper2)
    var swiper = new Swiper('.swiper2', {
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        updateOnWindowResize: true,
        pagination: {
            el: '#swiper-pagination2',
            clickable: true,
        },
        navigation: {
            nextEl: '#swiper-button-next-2',
            prevEl: '#swiper-button-prev-2',
        },
        breakpoints: {
            414: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            980: {
                slidesPerView: 3,
            },
        }
    });

    //   Slider 3
    var swiper = new Swiper('.swiper3', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        updateOnWindowResize: true,
        breakpoints: {
            414: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            980: {
                slidesPerView: 5,
            },
        }
    });
}
/*--------------------scrollbar----------------------------------*/

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar-main').addClass('scroll')

        } else {
            $('.navbar-main').removeClass('scroll')
        }
    })
})
/*---------------------menu responsive-----------------------------------------*/
$(document).ready(function () {
    $('#menu-bars').click(function () {
        $('#mask').fadeIn();
        $('.menu').animate({ left: "0px" })
    })
    $('#menu-bars-times').click(function () {
        $('#mask').fadeOut();
    })
})
/*----------------------smothscroll---------------------------*/
var text = document.getElementById('text');
var btn = document.getElementById('btn-up');
document.body.onscroll = function () {
    var top = document.documentElement.scrollTop;
    if (top > 1300) {
        btn.style.opacity = 1;
    } else {
        btn.style.opacity = 0;
    }
}
btn.addEventListener("click", function () {
    var current = document.documentElement.scrollTop;
    var scroll = setInterval(function () {
        document.documentElement.scrollTop = current -= 40;
        if (current < 2) {
            clearInterval(scroll)
        }
    }, 10);
});



function disableLazyLoadOnMonileAndTablet() {
    AOS.init();
    AOS.init({
        once: true,
        disable: "mobile",
    });
}