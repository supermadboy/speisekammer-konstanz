import './styles/styles.scss';
import $ from 'jquery'

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function getCurrentSeason () {
  var currentDate = new Date();

  switch (currentDate.getMonth()) {
    case 0:
    case 1:
    case 2:
      return 'spring';
    case 3:
    case 4:
    case 5:
      return 'summer';
    case 6:
    case 7:
    case 8:
      return 'autumn';
    case 9:
    case 10:
    case 11:
      return 'winter';
    default:
      return 'summer';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  var logo = document.getElementsByClassName('landing__logo')[0];

  logo.classList.remove('spring', 'summer', 'winter', 'autumn');

  var currentSeason = getCurrentSeason();
  logo.classList.add(currentSeason);
});

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
