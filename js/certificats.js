const modal = document.getElementById("projectModal");
const modalImages = modal.querySelector(".modal-images");
const closeModal = modal.querySelector(".close");

// Fermer le modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalImages.innerHTML = "";
});
// Fermer le modal quand on clique en dehors du contenu
modal.addEventListener("click", (e) => {
  if (e.target === modal) { // si le clic est sur le fond
    modal.style.display = "none";
    modalImages.innerHTML = "";
  }
});
// Quand on clique sur le SVG
document.querySelectorAll(".overlay-eye-icon").forEach(icon => {
  icon.addEventListener("click", (e) => {
    e.stopPropagation(); // éviter le clic sur la carte

    const card = icon.closest(".certificat-card");
    const project = card.dataset.project;

    modalImages.innerHTML = "";

    if(project === "skillboost") {
      const imgs = ["images/SKILLBOOST.png"];
      imgs.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        modalImages.appendChild(img);
      });
    } else if(project === "esms") {
      const imgs = ["images/ESMS.png"];
      imgs.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        modalImages.appendChild(img);
      });
    }
    // ✅ Afficher le modal
    modal.style.display = "flex";
  });
});
const projectsTexts = {
  fr: {
    bigtitle:"MES CERTIFICATS",

    skillboost: {
      name:"SkillBoost – Django Training",
      title: "Formation pratique en développement web avec Django, réalisée lors de l’événement SkillBoost organisé par le club scientifique CSE. Cette formation m’a permis d’acquérir les bases du framework Django, notamment la création d’applications web, la gestion des bases de données et l’implémentation de fonctionnalités côté serveur.",
      role: "<strong>Compétences acquises :</strong> Django, Python, gestion de base de données, développement backend",
    },
    esms: {
      name: "ESMS – Team Collaboration Program",
      title: "Certificat de participation à l’événement ESMS organisé par le club scientifique CSE. Ce programme collaboratif d’une durée d’un mois simulait un environnement professionnel réel, où chaque participant occupait un rôle spécifique au sein d’un département. J’ai intégré le département développement et participé activement à la réalisation d’un projet en équipe.",
     role: "<strong>Compétences développées :</strong> Travail d’équipe, collaboration inter-départements, organisation de projet, développement web",
    },   
  },

  en: {
    bigtitle: "MY CERTIFICATES",

    skillboost: {
      name: "SkillBoost – Django Training",
      title: "Hands-on training in web development with Django, completed during the SkillBoost event organized by the CSE scientific club. This training allowed me to learn the fundamentals of the Django framework, including web application development, database management, and backend feature implementation.",
      role: "<strong>Skills gained:</strong> Django, Python, database management, backend development",
    },

    esms: {
     name: "ESMS – Team Collaboration Program",
     title: "Certificate of participation in the ESMS event organized by the CSE scientific club. This one-month collaborative program simulated a real professional environment, where each participant held a specific role within a department. I was part of the development team and actively contributed to the realization of a team project.",
     role: "<strong>Skills developed:</strong> Teamwork, cross-department collaboration, project organization, web development",
    },   
  }
};

function setPROJECTSLanguage(lang) {
  const cards = document.querySelectorAll(".certificat-card");

  cards.forEach(card => {
    const key = card.dataset.project;

    card.querySelector(".name").textContent = projectsTexts[lang][key].name;
    card.querySelector(".domaine").textContent = projectsTexts[lang][key].title;
    card.querySelector(".role").innerHTML = projectsTexts[lang][key].role;
  });

  document.getElementById("bigtitle").textContent = projectsTexts[lang].bigtitle;
}



document.addEventListener("DOMContentLoaded", () => {
  
  const savedLang = localStorage.getItem("lang") || "fr";
  setPROJECTSLanguage(savedLang);
  const leftElement = document.querySelector(".slide-left");

setTimeout(() => {
  
    leftElement.classList.add("slide-visible");
 
}, 200);
const cards = document.querySelectorAll(".certificat-card");

  cards.forEach((card, i) => {
    card.style.animationDelay = (i * 0.15) + "s";
  });
});

/* ============================================================
   À AJOUTER dans js/certificats.js (à la fin du fichier,
   dans le même DOMContentLoaded ou juste après)
   ------------------------------------------------------------
   Gère l'affichage de l'overlay (.project-overlay) au TAP sur
   mobile, puisque le :hover CSS ne fonctionne pas de façon
   fiable au tactile. Un tap sur la carte ajoute/retire la
   classe "active" ; un tap ailleurs referme l'overlay ouvert.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".certificat-card");

  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      // Si on clique sur l'icône oeil, le modal s'ouvre déjà via son propre
      // listener (stopPropagation) : on ne touche pas à l'overlay dans ce cas.
      if (e.target.closest(".overlay-eye-icon")) return;

      const isActive = card.classList.contains("active");

      // Ferme les autres cartes ouvertes
      cards.forEach(c => c.classList.remove("active"));

      // Rouvre celle-ci si elle n'était pas déjà active (toggle)
      if (!isActive) {
        card.classList.add("active");
      }
    });
  });

  // Tap en dehors d'une carte -> ferme l'overlay ouvert
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".certificat-card")) {
      cards.forEach(c => c.classList.remove("active"));
    }
  });
});