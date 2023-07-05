import './styles/styles.scss';

import './assets/images/png/kraut.png';
import './assets/images/png/radieschen.png';
import './assets/images/haettelihof.jpg';
import './assets/images/haettelihof_450.jpg';
import './assets/images/herbasolaris.jpg';
import './assets/images/herbasolaris_450.jpg';
import './assets/images/kornschnalle.jpg';
import './assets/images/kornschnalle_450.jpg';
import './assets/images/orlivia.jpg';
import './assets/images/orlivia_450.jpg';
import './assets/images/kaffee-kooperative.jpg';
import './assets/images/kaffee-kooperative_450.jpg';

import './assets/pdf/Satzung.pdf';
import './assets/pdf/Mitgliederantragsformular.pdf';
import './assets/pdf/Kautionsvertrag.pdf';

import ctrly from 'ctrly';

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
      return 'spring'; //summer
    case 6:
    case 7:
    case 8:
      return 'autumn';
    case 9:
    case 10:
    case 11:
      return 'winter';
    default:
      return 'spring';
  }
}

var { closeAll } = ctrly();

var sidebarMobileContent = document.getElementById('sidebar-mobile-content');

for (let child of sidebarMobileContent.children) {
  if (child) {
    child.onclick = closeAll;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  var logo = document.getElementsByClassName('landing__logo')[0];

  logo.classList.remove('spring', 'summer', 'winter', 'autumn');

  var currentSeason = getCurrentSeason();
  logo.classList.add(currentSeason);

  var newsletterSignupButton = document.getElementById('newsletter_signup');
  newsletterSignupButton.onclick = function() {
    var emailToSignUp = document.getElementById('newsletter_email').value;

    console.log(emailToSignUp);
    var mapForm = document.createElement('form');  
    mapForm.target = '_blank';  
    mapForm.method = 'POST';
    mapForm.action = 'https://ml.kundenserver.de/cgi-bin/mailinglist.cgi';
    mapForm.style.display = 'none';

    var radiosubscribe = document.createElement('input');
    radiosubscribe.type = 'radio';
    radiosubscribe.name = 'subscribe_r';
    radiosubscribe.value = 'subscribe';
    radiosubscribe.checked = true;

    var radiounsubscribe = document.createElement('input');
    radiounsubscribe.type = 'radio';
    radiounsubscribe.name = 'subscribe_r';
    radiounsubscribe.value = 'unsubscribe';

    var mailaccount_r = document.createElement('input');
    mailaccount_r.type = 'text';
    mailaccount_r.name = 'mailaccount_r';
    mailaccount_r.value = emailToSignUp;

    var mailaccount2_r = document.createElement('input');
    mailaccount2_r.type = 'text';
    mailaccount2_r.name = 'mailaccount2_r';
    mailaccount2_r.value = emailToSignUp;

    var FBMLNAME = document.createElement('input');
    FBMLNAME.type = 'text';
    FBMLNAME.name = 'FBMLNAME';
    FBMLNAME.value = 'newsletter@speisekammer-konstanz.de';

    var FBLANG = document.createElement('input');
    FBLANG.type = 'hidden';
    FBLANG.name = 'FBLANG';
    FBLANG.value = 'de';

    var FBURLERROR = document.createElement('input');
    FBURLERROR.type = 'hidden';
    FBURLERROR.name = 'FBURLERROR_L';
    FBURLERROR.value = 'https://ml.kundenserver.de/mailinglist/error.de.html';

    var FBURLSUBSCRIBE = document.createElement('input');
    FBURLSUBSCRIBE.type = 'hidden';
    FBURLSUBSCRIBE.name = 'FBURLSUBSCRIBE_L';
    FBURLSUBSCRIBE.value = 'https://ml.kundenserver.de/mailinglist/subscribe.de.html';

    var FBURLUNSUBSCRIBE = document.createElement('input');
    FBURLUNSUBSCRIBE.type = 'hidden';
    FBURLUNSUBSCRIBE.name = 'FBURLUNSUBSCRIBE_L';
    FBURLUNSUBSCRIBE.value = 'https://ml.kundenserver.de/mailinglist/unsubscribe.de.html';

    var FBURLINVALID = document.createElement('input');
    FBURLINVALID.type = 'hidden';
    FBURLINVALID.name = 'FBURLINVALID_L';
    FBURLINVALID.value = 'https://ml.kundenserver.de/mailinglist/invalid.de.html';

    mapForm.appendChild(radiosubscribe);
    mapForm.appendChild(radiounsubscribe);
    mapForm.appendChild(mailaccount_r);
    mapForm.appendChild(mailaccount2_r);
    mapForm.appendChild(FBMLNAME);
    mapForm.appendChild(FBLANG);
    mapForm.appendChild(FBURLERROR);
    mapForm.appendChild(FBURLSUBSCRIBE);
    mapForm.appendChild(FBURLUNSUBSCRIBE);
    mapForm.appendChild(FBURLINVALID);

    document.body.appendChild(mapForm);
    mapForm.submit();
  }
});

window.hidePopup = function() {
  var popup = document.getElementById('popup');
  
  popup.classList.add("popup__hidden")
}