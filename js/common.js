document.addEventListener("navbarLoaded", () => {

  const barre = {
    fr: {
      navAccueil: "Accueil",
      navApropos: "À propos",
      navSkills: "Compétances",
      navproject: "Projets",
      navcertificat: "Certificats",
    },
    en: {
      navAccueil: "Home",
      navApropos: "About",
      navSkills: "Skills",
      navproject: "Projects",
      navcertificat: "Certificates",
    }
  };

  function setnavlinks(lang) {
    const navAccueil   = document.querySelector('a[href="index.html"]');
    const navApropos   = document.querySelector('a[href="apropos.html"]');
    const navSkills    = document.querySelector('a[href="skills.html"]');
    const navProject   = document.querySelector('a[href="projects.html"]');
    const navCertificat = document.querySelector('a[href="certificats.html"]');

    if (navAccueil)    navAccueil.textContent    = barre[lang].navAccueil;
    if (navApropos)    navApropos.textContent    = barre[lang].navApropos;
    if (navSkills)     navSkills.textContent     = barre[lang].navSkills;
    if (navProject)    navProject.textContent    = barre[lang].navproject;
    if (navCertificat) navCertificat.textContent = barre[lang].navcertificat;
  }

  const savedLang = localStorage.getItem("lang") || "fr";
  setnavlinks(savedLang);

  // Menu burger
  const burger   = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  if (burger && navLinks) {
    burger.style.touchAction = "manipulation";
    burger.style.webkitTapHighlightColor = "transparent";

    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      navLinks.classList.toggle("show");
      burger.classList.toggle("active");
    }

    burger.addEventListener("touchstart", toggleMenu, { passive: false });
    burger.addEventListener("click", toggleMenu);
  }

});