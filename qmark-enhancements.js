(function () {
  "use strict";

  var officialLogo = "qmark-official.png";

  function addHeroVisual(hero) {
    if (hero.querySelector(".qmark-hero-visual")) return;

    var visual = document.createElement("div");
    visual.className = "qmark-hero-visual";
    visual.setAttribute("aria-hidden", "true");

    var halo = document.createElement("div");
    halo.className = "qmark-hero-visual__halo";

    var logo = document.createElement("img");
    logo.className = "qmark-hero-visual__logo";
    logo.src = officialLogo;
    logo.alt = "";

    var diyaGlow = document.createElement("div");
    diyaGlow.className = "qmark-hero-visual__diya-glow";

    var diya = document.createElement("div");
    diya.className = "qmark-hero-visual__diya";
    diya.innerHTML = "<span></span><i></i>";

    visual.appendChild(halo);
    visual.appendChild(logo);
    visual.appendChild(diyaGlow);
    visual.appendChild(diya);
    hero.appendChild(visual);
  }

  function decorateHero(hero) {
    if (!hero) return;

    hero.classList.add("qmark-home-original");
    var copy = hero.firstElementChild;
    if (copy) {
      copy.classList.add("qmark-hero-copy");
      var children = copy.children;
      if (children[0]) children[0].classList.add("qmark-hero-badge");
      if (children[1]) children[1].classList.add("qmark-hero-title");
      if (children[2]) children[2].classList.add("qmark-hero-description");
      if (children[3]) children[3].classList.add("qmark-hero-actions");

      var offerings = children[4];
      if (offerings) {
        offerings.classList.add("qmark-hero-offerings");
        hero.appendChild(offerings);
      }
    }

    addHeroVisual(hero);
  }

  function decorateServices() {
    var services = document.getElementById("services");
    if (!services) return;
    services.classList.add("qmark-reference-section", "qmark-services-section");

    var grid = services.querySelector(".grid");
    if (grid) {
      grid.classList.add("qmark-reference-grid", "qmark-services-grid");
      Array.prototype.forEach.call(grid.children, function (card) {
        card.classList.add("qmark-reference-card", "qmark-service-card");
      });
    }
  }

  function decoratePortfolio() {
    var work = document.getElementById("work");
    if (!work) return;
    work.classList.add("qmark-reference-section", "qmark-portfolio-section");

    var grid = work.querySelector(".grid");
    if (grid) {
      grid.classList.add("qmark-reference-grid", "qmark-portfolio-grid");
      Array.prototype.forEach.call(grid.children, function (card) {
        card.classList.add("qmark-reference-card", "qmark-portfolio-card");
      });
    }
  }

  function decorateFooter() {
    var footer = document.querySelector("footer");
    if (!footer) return;
    footer.classList.add("qmark-reference-footer");

    var inner = footer.firstElementChild;
    if (inner) {
      inner.classList.add("qmark-footer-inner");
      Array.prototype.forEach.call(inner.children, function (child, index) {
        child.classList.add("qmark-footer-block", "qmark-footer-block-" + index);
      });
    }
  }

  function decorateNavigation() {
    var nav = document.querySelector("nav");
    if (nav) nav.classList.add("qmark-reference-nav");
  }

  function enhanceHomepage() {
    var hero = document.getElementById("home");
    if (!hero) return false;

    decorateHero(hero);
    decorateServices();
    decoratePortfolio();
    decorateFooter();
    decorateNavigation();

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