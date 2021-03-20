import $ from 'jquery'

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

var automaticSlider = {
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  arrows: false,
  dots: false,
}

let manualSlider = {
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 800,
  arrows: false,
  dots: true,
}

$('.landing__slider').not('.slick-initialized').slick(automaticSlider);

$('.steps__slider').not('.slick-initialized').slick(manualSlider);

$('.steps__slider-2').not('.slick-initialized').slick(automaticSlider);

$('.participate__slider').not('.slick-initialized').slick(manualSlider);

$('.producers__slider').not('.slick-initialized').slick(manualSlider);

$('.producers__slider-2').not('.slick-initialized').slick(automaticSlider);
