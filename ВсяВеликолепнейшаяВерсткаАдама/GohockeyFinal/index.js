import './styles/index.scss';
import $ from 'jquery';
import './slick/slick.min.js'
import './slick/slick.css';
import './slick/slick-theme.css';

  if ($(window).width() >= 1300) {
    $('.gohockey-final__swiper').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    });
  }
  if (($(window).width() < 1300) && ($(window).width() >= 930)) {
    $('.gohockey-final__swiper').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    });
  }
  if (($(window).width() < 930) && ($(window).width() >= 650)) {
    $('.gohockey-final__swiper').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    });
  }
  if (($(window).width() < 650)) {
    $('.gohockey-final__swiper').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }