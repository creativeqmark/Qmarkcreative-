(function () {
  "use strict";

  var officialLogo = "qmark-official.png";
  var heroArtwork = "attached_assets/generated_images/qmark-diwali-hero-background.png";

  function addHeroArtwork(hero) {
    if (hero.querySelector(".qmark-hero-artwork")) return;

    var artwork = document.createElement("div");
    artwork.className = "qmark-hero-artwork";
    artwork.setAttribute("aria-hidden", "true");

    var background = document.createElement("img");
    background.className = "qmark-hero-artwork__background";
    background.src = heroArtwork;
    background.alt = "";

    var logo = document.createElement("img");
    logo.className = "qmark-hero-artwork__logo";
    logo.src = officialLogo;
    logo.alt = "";

    artwork.appendChild(background);
    artwork.appendChild(logo);
    hero.appendChild(artwork);
  }

  function removeHeroOfferings(hero) {
    var copy = hero.firstElementChild;
    if (!copy) return;
    var offerings = copy.children[4];
    if (offerings) offerings.remove();
  }

  function enhanceHomepage() {
    var hero = document.getElementById("home");
    if (!hero) return false;
    hero.classList.add("qmark-home-original");
    removeHeroOfferings(hero);
    addHeroArtwork(hero);

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