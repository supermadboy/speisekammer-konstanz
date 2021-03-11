
import $ from 'jquery'

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.landing__slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 800,
  arrows: false,
});

$('.steps__slider').slick({
  speed: 800,
  arrows: false,
  dots: true,
});

$('.participate__slider').slick({
  speed: 800,
  arrows: false,
  dots: true,
});

$('.producers__slider').slick({
  speed: 800,
  arrows: false,
  dots: true,
});
