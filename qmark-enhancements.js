(function () {
  "use strict";

  var officialLogo = "qmark-official.png";

  function findText(root, selector, needle) {
    var nodes = root.querySelectorAll(selector);
    var target = needle.toLowerCase();
    for (var i = 0; i < nodes.length; i += 1) {
      if ((nodes[i].textContent || "").toLowerCase().indexOf(target) !== -1) {
        return nodes[i];
      }
    }
    return null;
  }

  function addHeroComposition(hero) {
    if (hero.querySelector(".qmark-hero-art")) return;
    var art = document.createElement("div");
    art.className = "qmark-hero-art";
    art.setAttribute("aria-hidden", "true");
    art.innerHTML =
      '<img src="' + officialLogo + '" alt="" />' +
      '<span class="qmark-hero-art__ring"></span>' +
      '<span class="qmark-hero-art__circle"></span>' +
      '<span class="qmark-hero-art__square"></span>';
    hero.appendChild(art);
  }

  function enhanceHomepage() {
    var hero = document.getElementById("home");
    if (!hero) return false;
    hero.classList.add("qmark-home-hero");

    var badge = findText(hero, "span", "Every creative question");
    if (badge) {
      badge.textContent = "Creative Agency • Branding • Websites";
    }

    var headline = hero.querySelector("h1");
    if (headline && !headline.getAttribute("data-qmark-enhanced")) {
      headline.setAttribute("data-qmark-enhanced", "true");
      headline.innerHTML =
        "Every Creative Question<br><span>Deserves</span><br>A Creative Answer.";
    }

    var description = hero.querySelector("p");
    if (description) {
      description.textContent =
        "We help businesses build memorable brands, premium websites, modern user experiences, and digital identities that leave a lasting impression.";
    }

    var buttons = hero.querySelectorAll("button");
    if (buttons[0]) buttons[0].textContent = "Start Your Project";
    if (buttons[1]) buttons[1].textContent = "Explore Portfolio";

    addHeroComposition(hero);

    var services = document.getElementById("services");
    if (services) {
      services.classList.add("qmark-home-section");
    }
    var work = document.getElementById("work");
    if (work) work.classList.add("qmark-home-section");
    var why = document.getElementById("why-us");
    if (why) why.classList.add("qmark-home-section");
    var contact = document.getElementById("contact");
    if (contact) contact.classList.add("qmark-home-section");

    return true;
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