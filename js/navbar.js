fetch("navbar.html")
.then(res => res.text())
.then(data => {

document.getElementById("navbar").innerHTML = data;


let page = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

    if(link.getAttribute("href") === page){
        link.classList.add("active");
    }

});

document.dispatchEvent(new Event("navbarLoaded"));

});
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
    document.querySelector('a[href="index.html"]').textContent = barre[lang].navAccueil;
    document.querySelector('a[href="apropos.html"]').textContent = barre[lang].navApropos;
    document.querySelector('a[href="skills.html"]').textContent = barre[lang].navSkills;
    document.querySelector('a[href="projects.html"]').textContent = barre[lang].navproject;
    document.querySelector('a[href="certificats.html"]').textContent = barre[lang].navcertificat;
  }

  const savedLang = localStorage.getItem("lang") || "fr";
  setnavlinks(savedLang);

  // --- Menu burger ---
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      burger.classList.toggle("active");
    });
  }

});