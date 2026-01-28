const skillsTexts = {
  fr: {
      bigtitle:"Mes Services",
    
      intro: "Je transforme vos idées en expériences numériques modernes et efficaces. Qu’il s’agisse d’un site vitrine, d’une plateforme complète ou d’un design interactif, je vous accompagne de la conception jusqu’à la mise en ligne.",
      
      design:{   
      title: "Design UI / UX",
      text: " Conception d’interfaces claires, modernes et centrées sur l’utilisateur, pensées pour être à la fois esthétiques et faciles à utiliser.",
       },
       front:{
      title:"Développement Front-End",
      text:"Création d’interfaces fluides et responsives, adaptées à tous les écrans et axées sur une expérience utilisateur agréable.",
      
       },
       back:{
      title:"Développement Back-End",
      text:"Mise en place de solutions fiables pour gérer les données, les utilisateurs et la logique métier d’une application.",
      
       },
       full:{
      title:"Développement Full-Stack",
      text:" Accompagnement complet d’un projet web, de l’idée initiale à une solution fonctionnelle et évolutive.",
    
       },
      
   
  },

  en: {
   bigtitle: "My Services",

intro: "I transform ideas into modern and efficient digital experiences. Whether it’s a showcase website, a complete platform, or an interactive design, I support your project from concept to deployment.",
design:{
title: "UI / UX Design",
text: "Designing clean and modern interfaces with a strong focus on usability and user experience.",
},
front:{
title: "Front-End Development",
text: "Building smooth and responsive interfaces that work seamlessly across all devices.",
},
back:{

title: "Back-End Development",
text: "Developing reliable systems to handle data, users, and application logic efficiently.",
},
full:{
title: "Full-Stack Development",
text: "Delivering complete web solutions, from concept to deployment, tailored to each project’s needs."
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
