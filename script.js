// Sélecteurs
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

// --- Menu burger ---
burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  burger.classList.toggle("active");
});

// --- Mode sombre / clair ---
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  // Changer l'icône
  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌞";
  } else {
    themeToggle.textContent = "🌙";
  }
});

const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
});

// Quand l’utilisateur choisit une langue
document.querySelectorAll("#lang-menu button").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const lang = e.target.getAttribute("data-lang");
    langBtn.textContent = lang === "fr" ? "FR" : "EN";
    langMenu.classList.add("hidden");
    
    // Tu peux ici changer la langue du contenu :
    console.log("Langue changée :", lang);
  });
});

// Fermer le menu si on clique ailleurs
document.addEventListener("click", (e) => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.add("hidden");
  }
});
// --- Popup des compétences ---
const skillCards = document.querySelectorAll('.skill-card');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closePopup = document.getElementById('close-popup');

skillCards.forEach(card => {
  card.addEventListener('click', () => {
    const info = card.dataset.info;
    popupText.textContent = info;
    popup.classList.add('active');
  });
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('active');
  }
});
 /* script.js - gestion des popups pour les projets */

// <-- Définit ici les informations de chaque projet -->
const projects = {
  qcmed: {
    title: "QCMed",
    desc: "QCMed est une plateforme éducative pour les étudiants en médecine. Elle propose des QCMs, la correction, et la possibilité de retravailler uniquement les questions fausses. Backend en Node.js et base SQLite.",
    tech: "Technologies : HTML, CSS, JavaScript, Node.js, SQLite",
    link: "#" // Remplace par le lien réel si disponible (ex : "https://ton-projet.onrender.com")
  },
  portfolio: {
    title: "Portfolio Personnel",
    desc: "Mon site personnel où je présente mes projets, mes compétences et mon parcours. Design responsive, animations CSS/JS et interface propre.",
    tech: "Technologies : HTML, CSS, JavaScript, Figma",
    link: "#" // Remplace par le lien réel si disponible
  }
};

// Sélecteurs (vérifie que les IDs correspondent à ton HTML)
const cards = document.querySelectorAll(".project-card");
const popup2 = document.getElementById("popup2");
const closePopup2 = document.getElementById("closePopup2");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const popupTech = document.getElementById("popupTech");
const popupBtn = document.getElementById("popupBtn");

// Debug : vérifier que tout est trouvé
console.log("cards:", cards);
console.log("popup2:", popup2, "closePopup2:", closePopup2);

// Sécurité : si éléments manquants, log et stop
if (!cards || !popup2 || !closePopup2 || !popupTitle || !popupDesc || !popupTech || !popupBtn) {
  console.error("Un ou plusieurs éléments nécessaires au popup sont introuvables dans le DOM. Vérifie les IDs/classes.");
} else {
  // Attacher les listeners sur chaque carte
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const projectKey = card.dataset.project;
      // Debug
      console.log("clic sur carte :", projectKey);

      if (!projectKey || !projects[projectKey]) {
        console.error("Clé de projet inconnue :", projectKey);
        // Optionnel : afficher un message dans le popup indiquant projet non disponible
        popupTitle.textContent = "Projet indisponible";
        popupDesc.textContent = "Informations indisponibles pour ce projet.";
        popupTech.textContent = "";
        popupBtn.onclick = null;
      } else {
        const project = projects[projectKey];
        popupTitle.textContent = project.title;
        popupDesc.textContent = project.desc;
        popupTech.textContent = project.tech;
        // Si link vaut "#", on peut désactiver le bouton
        if (project.link && project.link !== "#") {
          popupBtn.onclick = () => window.open(project.link, "_blank");
          popupBtn.style.display = "inline-block";
        } else {
          popupBtn.onclick = null;
          popupBtn.style.display = "none"; // masquer si pas de lien
        }
      }

      // afficher popup
      popup2.classList.add("active");
      // empêcher scroll de fond (optionnel)
      document.body.style.overflow = "hidden";
    });
  });

  // fermer via la croix
  closePopup2.addEventListener("click", () => {
    popup2.classList.remove("active");
    document.body.style.overflow = ""; // restaurer scroll
  });

  // fermer en cliquant sur le fond sombre
  popup2.addEventListener("click", e => {
    if (e.target === popup2) {
      popup2.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // fermer si appuie ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup2.classList.contains("active")) {
      popup2.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
