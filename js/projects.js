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

    const card = icon.closest(".project-card");
    const project = card.dataset.project;

    modalImages.innerHTML = "";

    if(project === "qcmed") {
      const imgs = ["images/qcmed-ouverture.png", "images/qcmed-inscription.png", "images/qcmed-accueil.png", "images/qcmed-cours.png", "images/qcmed-caracteristiques.png", "images/qcmed-qcm.png", "images/qcmed-qcmcorr.png", "images/qcmed-corrige.png"];
      imgs.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        modalImages.appendChild(img);
      });
    } else if(project === "portfolio") {
      const imgs = ["images/portfolio-accueil.png", "images/portfolio-about.png", "images/portfolio-skills.png", "images/portfolio-services.png", "images/portfolio-contact.png"];
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
    bigtitle:"Mes Projets",
    qcmed: {
      name:"QCMed",
      title: "Plateforme interactive de QCMs médicaux.",
      role: '<strong>Rôle :</strong>Développement Full-Stack complet',
      status: '<strong>Statut :</strong> En cours de réalisation/ Phase de test',
      voir:"Voir le projet",
    },
    portfolio: {
       name:"Portfolio Personnel",
      title: "Mon site web personnel avec un design moderne.",
      role: '<strong>Rôle :</strong> Développement front-end complet',
      status: '<strong>Statut :</strong> Terminé',
      voir:"Voir le projet",
    },
    
  },

  en: {
    bigtitle: "My Projects",
qcmed: {
  name: "QCMed",
  title: "Interactive platform for medical MCQs.",
  role: "<strong>Role:</strong> Full-stack development",
  status: "<strong>Status:</strong> In progress / Testing phase",
  voir: "View project",
},
portfolio: {
  name: "Personal Portfolio",
  title: "My personal website with a modern design.",
  role: "<strong>Role:</strong> Complete front-end development",
  status: "<strong>Status:</strong> Completed",
  voir: "View project",
},

    
  }
};




function setPROJECTSLanguage(lang) {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    const key = card.dataset.project;

    card.querySelector(".name").textContent = projectsTexts[lang][key].name;
    card.querySelector(".domaine").textContent = projectsTexts[lang][key].title;
    card.querySelector(".role").innerHTML = projectsTexts[lang][key].role;
    card.querySelector(".status").innerHTML = projectsTexts[lang][key].status;
    card.querySelector(".voir").textContent = projectsTexts[lang][key].voir;
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
const cards = document.querySelectorAll(".project-card");

  cards.forEach((card, i) => {
    card.style.animationDelay = (i * 0.15) + "s";
  });
});

