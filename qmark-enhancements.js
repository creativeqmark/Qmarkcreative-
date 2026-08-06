(function () {
  "use strict";

  var officialLogo = "qmark-official.png";

  function enhanceHomepage() {
    var hero = document.getElementById("home");
    if (!hero) return false;
    hero.classList.add("qmark-home-original");
    var navbarLogo = document.querySelector("nav img[src*='qmark-logo.png']");
    if (navbarLogo) {
      navbarLogo.src = officialLogo;
    }

    return Boolean(navbarLogo);
  }

  function revealIntro() {
    var intro = document.querySelector(".qmark-intro");
    if (!intro) return;
    window.setTimeout(function () {
      intro.classList.add("is-hidden");
      window.setTimeout(function () {
        if (intro.parentNode) intro.parentNode.removeChild(intro);
      }, 700);
    }, 2700);
  }

  function boot() {
    revealIntro();
    if (enhanceHomepage()) return;
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      if (enhanceHomepage() || attempts > 120) {
        window.clearInterval(timer);
      }
    }, 50);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}());