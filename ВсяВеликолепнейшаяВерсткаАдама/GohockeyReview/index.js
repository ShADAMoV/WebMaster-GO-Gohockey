import './styles/index.scss';
import $ from 'jquery';
import './slick/slick.min.js'
import './slick/slick.css';
import './slick/slick-theme.css';

$('document').ready(function () {
    //Удаление второго слова в названии игрока (то есть удаление имени)
    if (document.documentElement.clientWidth <= 550) {
        var playerName = $(".match-progress__player-name")
        var deletePartOfName;
        for (var i = 0; i < playerName.length; i++) {
            deletePartOfName = playerName[i].textContent
            deletePartOfName = deletePartOfName.split(' ')
            deletePartOfName = deletePartOfName[0] + " " + deletePartOfName[2]
            playerName[i].textContent = deletePartOfName
        }
    }

    //Удаление и добавление подчеркивания
    let navList = $('.go-review__nav-list li')

    navList.on('click', function () {
        for (let i = 0; i < navList.length; i++) {
            $(navList[i]).removeClass('li-active')
        }

        $(this).addClass('li-active')
    })

    //Раскрытие и скрытие блока с периодами
    $(".match-progress__button").on("click", function () {
        if ($(".match-progress__button").text() == "Развернуть") {
            $(".match-progress__bounding-block").addClass("max-height")
            $(".match-progress__button").text("Свернуть")
        } else {
            $(".match-progress__bounding-block").removeClass("max-height")
            $(".match-progress__button").text("Развернуть")
        }
    })

    //Измнение количества отображаемых видео в свайпере
    if ($(window).width() >= 1100) {
        $('.video-review__swiper').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
        });
    }
    if (($(window).width() < 1100) && ($(window).width() >= 610)) {
        $('.video-review__swiper').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
        });
    }
    if ($(window).width() < 610) {
        $('.video-review__swiper').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }

    //Раскрытие и скрытие блока с фото
    $(".photo-review__btn").on("click", function () {
        if ($(".photo-review__btn").text() == "Все фото") {
            $(".photo-review__content").addClass("max-height")
            $(".photo-review__btn").text("Свернуть")
        } else {
            $(".photo-review__content").removeClass("max-height")
            $(".photo-review__btn").text("Все фото")
        }
    })

})