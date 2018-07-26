var nav = document.querySelector('nav');
var navBtn = document.getElementById('navi-toggle');

// Changes a received dom elements display

function changeElementDisplay(el, display) {
  return function() {
    el.style.display = display;
  };
}

// Toggles the nav elements display property

function toggleNav() {
  if (nav.style.display === 'block') {
    setTimeout(changeElementDisplay(nav, 'none'), 150);
  } else {
    setTimeout(changeElementDisplay(nav, 'block'), 200);
  }
}

// Simulates a navBtn click

function navBtnClick() {
  navBtn.click();
}

/*
  Whenever an internal link is clicked in the page,
  a smooth scroll needs to executed to its target.

  1. Grab all the internal links
  2. Add the smooth scroll event handler pointing to their target element
*/

var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  if (link.getAttribute('href').indexOf('#') == 0) {
    link.addEventListener('click', smoothScrollToTarget);
  }
}

function smoothScrollToTarget(e) {
  var id = e.target.getAttribute('href').slice(1);
  var target = document.getElementById(id);
  window.smoothScroll(target);
}

// Registered event listeners

navBtn.addEventListener('click', toggleNav);
nav.addEventListener('click', navBtnClick);
