const skillsTexts = {
  fr: {
      bigtitle:"Mes Services",
    
      intro: "J’aime transformer des idées en expériences numériques modernes.  Que ce soit pour un site vitrine, une plateforme complète ou un design interactif  ,je peux donner vie à votre projet de son début à sa fin.",
      
      design:{   
      title: "Design UI / UX",
      text: " Création d’interfaces modernes et intuitives avec une attention particulière à l’expérience utilisateur.  Conception sur Figma, respect des tendances et identité visuelle unique.",
       },
       front:{
      title:"Développement Front-End",
      text:"Intégration responsive et dynamique avec HTML, CSS et JavaScript.  Je m’assure que chaque site soit fluide, esthétique et performant sur tous les écrans.",
      
       },
       back:{
      title:"Développement Back-End",
      text:"Création de serveurs robustes avec Node.js et bases de données SQLite.  Gestion des utilisateurs, envoi d’e-mails et API sécurisées.",
      
       },
       full:{
      title:"Développement Full-Stack",
      text:" Du design au déploiement : je développe des sites web complets et fonctionnels.  Une maîtrise du front et du back pour des solutions personnalisées.",
    
       },
      
   
  },

  en: {
   bigtitle: "My Services",

intro: "I love transforming ideas into modern digital experiences. Whether it’s a showcase website, a full platform, or interactive design, I can bring your project to life from start to finish.",
design:{
title: "UI / UX Design",
text: "Creating modern and intuitive interfaces with special attention to user experience. Designing on Figma, following trends and unique visual identity.",
},
front:{
title: "Front-End Development",
text: "Responsive and dynamic integration with HTML, CSS, and JavaScript. Ensuring each site is smooth, aesthetic, and performs well on all screens.",
},
back:{

title: "Back-End Development",
text: "Creating robust servers with Node.js and SQLite databases. User management, email sending, and secure APIs.",
},
full:{
title: "Full-Stack Development",
text: "From design to deployment: I build complete and functional websites. Mastery of front and back for customized solutions."
},
    
  }
};



function servicesLanguage(lang) {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    const key = card.getAttribute("data-key");
    const title = card.querySelector("h3");
    const text = card.querySelector("p");

    title.textContent = skillsTexts[lang][key].title;
    text.textContent = skillsTexts[lang][key].text;

  });

  document.querySelector('.services h2').innerHTML = skillsTexts[lang].bigtitle;
  document.querySelector('.services p').innerHTML = skillsTexts[lang].intro;

}


document.addEventListener("DOMContentLoaded", () => {
  
  const savedLang = localStorage.getItem("lang") || "fr";
  servicesLanguage(savedLang);
   const leftElements = document.querySelectorAll(".slide-left");

setTimeout(() => {
  leftElements.forEach(element => {
    element.classList.add("slide-visible");
  });
}, 200);
const cards = document.querySelectorAll(".service-card");

  cards.forEach((card, i) => {
    card.style.animationDelay = (i * 0.15) + "s";
  });

});
