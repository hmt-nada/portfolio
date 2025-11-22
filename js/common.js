// Récupérer le thème sauvegardé
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  
} else {
  document.body.classList.remove("light-mode");
  
}
document.querySelector('.theme-btn').style.visibility = "hidden";

const barre = {
    fr: {
      navAccueil: "Accueil",
      navApropos: "À propos",
      navSkills: "Compétances",
      navproject: "Projets",
    },
    en: {
      navAccueil: "Home",
      navApropos: "About",
      navSkills: "Skills",
      navproject: "Projects",
    }
  };
function setnavlinks(lang) {
    document.querySelector('a[href="index.html"]').textContent = barre[lang].navAccueil;
    document.querySelector('a[href="apropos.html"]').textContent = barre[lang].navApropos;
    document.querySelector('a[href="skills.html"]').textContent = barre[lang].navSkills;
    document.querySelector('a[href="projects.html"]').textContent = barre[lang].navproject;
    
  }
  const savedLang = localStorage.getItem("lang") || "fr";
  setnavlinks(savedLang);
const burger = document.getElementById("burger");
  // --- Menu burger ---
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burger.classList.toggle("active");
  });