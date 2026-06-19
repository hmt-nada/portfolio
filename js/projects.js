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
      const imgs = ["images/qcmed-ouverture.png", "images/qcmed-inscription.png", "images/qcmed-accueil.png", "images/qcmed-faculty.png", "images/qcmed-cours.png", "images/qcmed-caracteristiques.png", "images/qcmed-qcm.png", "images/qcmed-qcmcorr.png", "images/qcmed-note.png", "images/qcmed-corrige.png"
        , "images/qcmed-history.png", "images/qcmed-statistiques.png", "images/qcmed-favoris.png", "images/qcmed-manageprofile.png"
      ];
      imgs.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        modalImages.appendChild(img);
      });
    } else if(project === "portfolio") {
      const imgs = ["images/portfolio-accueil.png", "images/portfolio-about.png", "images/portfolio-skills.png", "images/portfolio-projects.png", "images/portfolio-contact.png"];
      imgs.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        modalImages.appendChild(img);
      });
    } else if(project === "ni3ma") {
      const imgs = [
       
         // --- Onboarding ---
        "images/ouverture.png",
        "images/inscription.png",

        // --- Espace Client ---
        "images/inscription_Client.png",
        "images/home_client.png",
        "images/Offer_detail.png",
        "images/favorite_offers.png",
        "images/orders_client.png",
        "images/history_client.png",
        "images/statistics_client.png",
        "images/Notification_client.png",

        // --- Espace Commerçant ---
        "images/inscription_merchant.png",
        "images/merchant_home.png",
        "images/Add_offer.png",
        "images/merchant_Orders.png",
        "images/merchant_History.png",
        "images/merchant_Statistics.png",
        "images/Notification_merchant.png",

        // --- Espace Admin ---
        "images/Admin_Dashboard.png",
        "images/Merchants_Requests.png",
        "images/offers_admin.png",
        "images/orders_admin.png",
        "images/users.png",
        "images/statistics_admin.png",
        "images/admin_Notifications.png",
      ];
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
      title: "Plateforme interactive de QCMs médicaux pour faciliter l’apprentissage et l’évaluation continue des étudiants en médecine.",
      role: '<strong>Rôle :</strong>UI/UX Design et développement Full-Stack complet, de la conception de l’interface à l’implémentation des fonctionnalités et de la base de données',
      voir:"Voir le projet",
    },
    portfolio: {
       name:"Portfolio Personnel",
      title: "Mon portfolio personnel, conçu pour présenter mes projets et compétences avec un design moderne et responsive, optimisé pour une navigation fluide.",
      role: '<strong>Rôle :</strong> Développement front-end complet, design UX/UI et intégration responsive',
      voir:"Voir le projet",
    },
    ni3ma: {
  name: "Ni3ma",
  title: "Application mobile de lutte contre le gaspillage alimentaire connectant commerçants et clients pour valoriser les invendus à prix réduit.",
  role: "<strong>Rôle :</strong> Développement d'une partie du backend, configuration de la base de données et de Firebase, intégration frontend-backend pour les espaces Client et Admin",
  voir: "Voir le projet",
},
    
  },

  en: {
    bigtitle: "My Projects",
qcmed: {
  name: "QCMed",
  title: "Interactive platform of medical multiple-choice quizzes to facilitate learning and continuous assessment for medical students.",
  role: "<strong>Role:</strong> Full-Stack development, database integration, and management of interactive features",
  voir: "View project",
},
portfolio: {
  name: "Personal Portfolio",
  title: "My personal portfolio, designed to showcase my projects and skills with a modern and responsive design, optimized for smooth navigation.",
  role: "<strong>Role:</strong> Complete front-end development, UX/UI design, and responsive integration",
  voir: "View project",
},
ni3ma: {
  name: "Ni3ma",
  title: "A mobile app fighting food waste by connecting merchants and customers, allowing unsold items to be sold at a reduced price.",
  role: "<strong>Role:</strong> Backend development (partial), database and Firebase configuration, frontend-backend integration for the Client and Admin sections",
  voir: "View project",
},

    
  }
};

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", (e) => {
    // Ignore le clic si on a cliqué sur l'icône oeil, un lien ou un bouton
    if (e.target.closest(".overlay-eye-icon") || e.target.closest("a")) return;

    // Ferme les autres cartes ouvertes
    document.querySelectorAll(".project-card.active").forEach(c => {
      if (c !== card) c.classList.remove("active");
    });

    card.classList.toggle("active");
  });
});



function setPROJECTSLanguage(lang) {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    const key = card.dataset.project;

    card.querySelector(".name").textContent = projectsTexts[lang][key].name;
    card.querySelector(".domaine").textContent = projectsTexts[lang][key].title;
    card.querySelector(".role").innerHTML = projectsTexts[lang][key].role;
    card.querySelector(".voir").textContent = projectsTexts[lang][key].voir;
  });

  document.getElementById("bigtitle").textContent = projectsTexts[lang].bigtitle;
}

  // --- Menu burger (une fois le navbar chargé) ---
  document.addEventListener("navbarLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
      burger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        burger.classList.toggle("active");
      });
    }
  });

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

