import './styles/index.scss';
import $ from 'jquery';

if (document.documentElement.clientWidth > 768) {
    $('.go-news__modal-banner-share').on('click', function () {
        $(".go-news__modal-banner-share-links").toggleClass("show")
    });

    $(document).mouseup(function (e) {
        if (!e.target.matches('.go-news__modal-banner-share')) {
            $(".go-news__modal-banner-share-links").removeClass("show")
        }
    })
}

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".go-news__modal-block"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        &&
        div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".go-news__modal-window").removeClass("flex");
        $("body").removeClass("overflow-no")
    }
});

$('.go-news__item').on('click', function () {
    var index = $(this).attr("modal-index")
    console.log(index)
    $(`#modal${index}`).addClass("flex")
    if ($(`#modal${index}`).hasClass("flex")) {
        $("body").addClass("overflow-no")
    }
});


if (document.documentElement.clientWidth <= 768) {


    const shareButton = document.querySelector('.go-news__modal-banner-share'),
        thisUrl = window.location.href,
        thisTitle = document.title;
    shareButton.addEventListener('click', event => {
        if (navigator.share) {
            navigator.share({
                    title: thisTitle,
                    url: thisUrl
                })
                .catch(console.error);
        } else {
            alert('Web Share API не поддерживается');
        }
    });
}