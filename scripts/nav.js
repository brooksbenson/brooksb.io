var nav = document.querySelector('nav');
var navBtn = document.getElementById('navi-toggle');

function changeElementDisplay(el, display) {
  return function() {
    el.style.display = display;
  };
}

function toggleNav() {
  if (nav.style.display === 'block') {
    setTimeout(changeElementDisplay(nav, 'none'), 150);
  } else {
    setTimeout(changeElementDisplay(nav, 'block'), 200);
  }
}

navBtn.addEventListener('click', toggleNav);
