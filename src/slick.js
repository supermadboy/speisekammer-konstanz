import $ from 'jquery'

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.landing__slider').not('.slick-initialized').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 800,
  arrows: false,
});

$('.steps__slider').not('.slick-initialized').slick({
  speed: 800,
  arrows: false,
  dots: true,
});

$('.participate__slider').not('.slick-initialized').slick({
  speed: 800,
  arrows: false,
  dots: true,
});

$('.producers__slider').not('.slick-initialized').slick({
  speed: 800,
  arrows: false,
  dots: true,
});
