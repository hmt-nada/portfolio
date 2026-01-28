
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
    document.querySelector('a[href="index.html"]').textContent = barre[lang].navAccueil;
    document.querySelector('a[href="apropos.html"]').textContent = barre[lang].navApropos;
    document.querySelector('a[href="skills.html"]').textContent = barre[lang].navSkills;
    document.querySelector('a[href="projects.html"]').textContent = barre[lang].navproject;
    document.querySelector('a[href="certificats.html"]').textContent = barre[lang].navcertificat;
    
  }
  const savedLang = localStorage.getItem("lang") || "fr";
  setnavlinks(savedLang);
const burger = document.getElementById("burger");
  // --- Menu burger ---
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burger.classList.toggle("active");
  });