const skillsTexts = {
  fr: {
    bigtitle:"Mes Compétances",
    html: {
      title: "HTML",
      desc: "Structure et sémantique des pages web modernes.",
      popup: "Balises sémantiques et structure claire."
    },
    css: {
      title: "CSS",
      desc: "Création d’interfaces modernes et responsives.",
      popup: "Flexbox, Grid et responsive design."
    },
    tailwind: {
      title: "Tailwind CSS",
      desc: "Framework CSS utilitaire et responsive.",
      popup: "Design rapide grâce aux classes utilitaires."
    },
    js: {
      title: "JavaScript",
      desc: "Interactions dynamiques et logique frontend.",
      popup: "Manipulation du DOM et logique interactive."
    },
     react: {
      title: "React",
      desc: "Interfaces dynamiques basées sur des composants.",
      popup: "Composants réutilisables et gestion d’état."
    },
    nextjs: {
      title: "Next.Js",
      desc: "Framework React pour applications performantes.",
      popup: "Rendu côté serveur et routing intégré."
    },
    node: {
      title: "Node.js",
      desc: "Développement côté serveur rapide et flexible.",
      popup: "Création d’API backend avec JavaScript."
    },
    git: {
     title: "Git",
     desc: "Gestion de versions et travail collaboratif.",
     popup: "Branches, commits et workflow propre."
     
    },
    github: {
      title: "GitHub",
      desc: "Versioning et hébergement de code source.",
      popup: "Collaboration et gestion de projets."
    },
    render: {
      title: "Render",
      desc: "Déploiement et hébergement en ligne.",
      popup: "Déploiement simple d’applications web."
    },
    sqlite: {
      title: "SQLite",
      desc: "Base de données légère et rapide.",
      popup: "Base locale pour projets et tests."
    },
    postgresql: {
      title: "PostgreSQL",
      desc: "Base de données robuste et performante.",
      popup: "Gestion fiable des données relationnelles."
    },
    c: {
      title: "C",
      desc: "Langage bas niveau pour la logique et les performances.",
      popup: "Mémoire, pointeurs et logique bas niveau."
    },
    figma: {
      title: "Figma",
      desc: "Conception d’interfaces et prototypage visuel.",
      popup: "Maquettes UI avant développement."
    }
  },

  en: {
    bigtitle:"My Skills",

    html: {
      title: "HTML",
      desc: "Structure and semantics of modern web pages.",
      popup: "Semantic tags and clean structure."
    },
    css: {
      title: "CSS",
      desc: "Modern and responsive UI design.",
      popup: "Flexbox, Grid and responsive layouts."
    },
     tailwind: {
      title: "Tailwind CSS",
      desc: "Utility-first and responsive CSS framework.",
      popup: "Fast styling with utility classes."
    },
    js: {
      title: "JavaScript",
      desc: "Dynamic interactions and frontend logic.",
      popup: "DOM manipulation and interactive logic."
    },
    react: {
     title: "React",
     desc: "Component-based dynamic interfaces.",
     popup: "Reusable components and state management."
    },
    nextjs: {
     title: "Next.js",
     desc: "React framework for high-performance apps.",
     popup: "Server-side rendering and routing."
    },
    node: {
      title: "Node.js",
      desc: "Fast and flexible server-side development.",
      popup: "Backend APIs with JavaScript."
    },
    git: {
     title: "Git",
      desc: "Version control and collaborative work.",
      popup: "Branches, commits and clean workflow."
     
    },
    github: {
      title: "GitHub",
      desc: "Version control and code hosting.",
      popup: "Project hosting and collaboration."
    },
    render: {
      title: "Render",
      desc: "Deployment and online hosting.",
      popup: "Easy web app deployment."
    },
    sqlite: {
      title: "SQLite",
      desc: "Lightweight and fast database.",
      popup: "Local database for testing."
    },
    postgresql: {
      title: "PostgreSQL",
      desc: "Robust and high-performance database.",
      popup: "Reliable relational data management."
    },
    c: {
      title: "C",
      desc: "Low-level language for logic and performance.",
      popup: "Memory management and low-level logic."
    },
    figma: {
      title: "Figma",
      desc: "UI design and visual prototyping.",
      popup: "UI mockups before development."
    }
  }
};

function updateTooltips() {
  const lang = localStorage.getItem("lang") || "fr";
  const cards = document.querySelectorAll(".skill-card");
  cards.forEach(card => {
    const key = card.dataset.key;
    const tooltip = card.querySelector(".tooltip");
    if (tooltip && skillsTexts[lang] && skillsTexts[lang][key]) {
      tooltip.textContent = skillsTexts[lang][key].popup;
    }
  });
}

function setSkillsLanguage(lang) {
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach(card => {
    const key = card.getAttribute("data-key");
    const title = card.querySelector("h3");
    const desc = card.querySelector("p");

    title.textContent = skillsTexts[lang][key].title;
    desc.textContent = skillsTexts[lang][key].desc;

    card.setAttribute("data-info", skillsTexts[lang][key].popup);
  });

  document.querySelector('.skills-section h3').innerHTML = skillsTexts[lang].bigtitle;

  // ⚡ Mettre les tooltips à jour
  updateTooltips();
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

    // ⚡ Initialiser la page avec la langue correcte
    setSkillsLanguage(savedLang);

    // Définir l'animation des cartes
    const cards = document.querySelectorAll(".skill-card");
    cards.forEach((card, i) => {
        card.style.animationDelay = (i * 0.15) + "s";
    });

    const leftElement = document.querySelector(".slide-left");
    setTimeout(() => {
        leftElement.classList.add("slide-visible");
    }, 200);
});

