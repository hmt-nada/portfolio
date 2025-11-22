const skillsTexts = {
  fr: {
    bigtitle:"Mes Compétances",
    html: {
      title: "HTML",
      desc: "Structure et sémantique des pages web modernes.",
      popup: "J’ai utilisé HTML dans plusieurs interfaces..."
    },
    css: {
      title: "CSS",
      desc: "Création d’interfaces modernes et responsives.",
      popup: "J’utilise CSS pour rendre mes sites modernes..."
    },
    js: {
      title: "JavaScript",
      desc: "Interactions dynamiques et logique frontend.",
      popup: "Avec JavaScript, j’ajoute des interactions..."
    },
    node: {
      title: "Node.js",
      desc: "Développement côté serveur rapide et flexible.",
      popup: "Node.js me permet de développer des API..."
    },
    git: {
     title: "Git",
     desc: "Gestion de versions et travail collaboratif.",
     popup: "J’utilise Git pour gérer les versions de mes projets, travailler avec des branches, fusionner du code et collaborer efficacement."
     
    },
    github: {
      title: "GitHub",
      desc: "Versioning et hébergement de code source.",
      popup: "J’utilise GitHub pour gérer mes projets..."
    },
    render: {
      title: "Render",
      desc: "Déploiement et hébergement en ligne.",
      popup: "Render me permet de déployer mes projets..."
    },
    sqlite: {
      title: "SQLite",
      desc: "Base de données légère et rapide.",
      popup: "SQLite est la base de données que j'utilise..."
    },
    postgresql: {
      title: "PostgreSQL",
      desc: "Base de données robuste et performante.",
      popup: "PostgreSQL est la base de données que j’utilise pour gérer, requêter et structurer des données de manière fiable et performante."
    },
    c: {
      title: "C",
      desc: "Langage bas niveau pour la logique et les performances.",
      popup: "Le langage C m’a permis de renforcer ma logique..."
    },
    figma: {
      title: "Figma",
      desc: "Conception d’interfaces et prototypage visuel.",
      popup: "J’utilise Figma pour concevoir des maquettes..."
    }
  },

  en: {
    bigtitle:"My Skills",
    html: {
      title: "HTML",
      desc: "Structure and semantics of modern web pages.",
      popup: "I used HTML to build several interfaces..."
    },
    css: {
      title: "CSS",
      desc: "Modern and responsive UI design.",
      popup: "I use CSS to make my sites modern..."
    },
    js: {
      title: "JavaScript",
      desc: "Dynamic interactions and frontend logic.",
      popup: "With JavaScript, I add dynamic interactions..."
    },
    node: {
      title: "Node.js",
      desc: "Fast and flexible server-side development.",
      popup: "Node.js allows me to build servers and APIs..."
    },
    git: {
     title: "Git",
      desc: "Version control and collaborative work.",
      popup: "I use Git to manage project versions, work with branches, merge code, and collaborate efficiently."
     
    },
    github: {
      title: "GitHub",
      desc: "Version control and code hosting.",
      popup: "I use GitHub to manage and host my projects..."
    },
    render: {
      title: "Render",
      desc: "Deployment and online hosting.",
      popup: "Render allows me to deploy my projects easily..."
    },
    sqlite: {
      title: "SQLite",
      desc: "Lightweight and fast database.",
      popup: "SQLite is the database I use for small projects..."
    },
    postgresql: {
      title: "PostgreSQL",
      desc: "Robust and high-performance database.",
      popup: "PostgreSQL is the database I use to manage, query, and structure data reliably and efficiently."
    },
    c: {
      title: "C",
      desc: "Low-level language for logic and performance.",
      popup: "The C language helped me improve my algorithmic thinking..."
    },
    figma: {
      title: "Figma",
      desc: "UI design and visual prototyping.",
      popup: "I use Figma to design mockups for my web projects..."
    }
  }
};

function updateTooltips() {
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach(card => {
    const key = card.dataset.key;
    const tooltip = card.querySelector(".tooltip");

    if (tooltip) {
      tooltip.textContent = skillsTexts[localStorage.getItem("lang")][key].popup;
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


document.addEventListener("DOMContentLoaded", () => {
   const savedLang = localStorage.getItem("lang") || "fr";
  updateTooltips();
 
  setSkillsLanguage(savedLang);
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach((card, i) => {
    card.style.animationDelay = (i * 0.15) + "s";
  });
  const leftElement = document.querySelector(".slide-left");

setTimeout(() => {
  
    leftElement.classList.add("slide-visible");
  
}, 200);
});
