

document.addEventListener("DOMContentLoaded", () => {
  
  const left = document.querySelector(".slide-left");
  const right = document.querySelector(".slide-right");

  setTimeout(() => {
    left.classList.add("slide-visible");
  }, 200);

  setTimeout(() => {
    right.classList.add("slide-visible");
  }, 400);


let timeouts = [];

function clearAllTimeouts() {
  for (let t of timeouts) clearTimeout(t);
  timeouts = [];
}

function safeTimeout(fn, delay) {
  const id = setTimeout(fn, delay);
  timeouts.push(id);
}
  const rolesByLang = {
  fr: ["Étudiante à l'ESI", "Designer", "Développeuse Backend", "Développeuse Frontend", "Développeuse Full-Stack"],
  en: ["ESI student", "Designer", "Backend Developer", "Frontend Developer", "Full-Stack Developer"]
};
  // Sélecteurs
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
  // Texte et langue
  const texts = {
    fr: {
      heroTitle: 'Je suis <span class="highlight-name">Hamitouche Nada</span>',
      heroDesc: "Je suis ..",
      navAccueil: "Accueil",
      navApropos: "À propos",
      navSkills: "Compétances",
      navcertificat: "Certificats",
      navproject: "Projets",
    },
    en: {
      heroTitle: 'Hi, I\'m <span class="highlight-name">Hamitouche Nada</span>',
      heroDesc: "I am ..",
      navAccueil: "Home",
      navApropos: "About",
      navSkills: "Skills",
      navcertificat: "Certificates",
      navproject: "Projects",
    }
  };

  function setLanguage(lang) {
    document.querySelector('.intro h1').innerHTML = texts[lang].heroTitle;
    document.querySelector('.intro .static').textContent = texts[lang].heroDesc;
    document.querySelector('a[href="index.html"]').textContent = texts[lang].navAccueil;
    document.querySelector('a[href="apropos.html"]').textContent = texts[lang].navApropos;
    document.querySelector('a[href="skills.html"]').textContent = texts[lang].navSkills;
    document.querySelector('a[href="projects.html"]').textContent = texts[lang].navproject;
    document.querySelector('a[href="certificats.html"]').textContent = texts[lang].navcertificat;
    roles = rolesByLang[lang]; // <-- mise à jour dynamique
  clearAllTimeouts();  //STOP ANIMATION
  roleIndex = 0;    // recommencer depuis le premier rôle
  charIndex = 0;    // recommencer l’écriture
  isDeleting = false;
   tick(); //RE-LANCE ANIMATION PROPREMENT
  }

  // --- Appliquer langue sauvegardée ou FR par défaut ---
  const savedLang = localStorage.getItem("lang") || "fr";
  let roles = rolesByLang[savedLang]; // initialise avec la langue sauvegardée
  
  langBtn.textContent = savedLang.toUpperCase();

  // --- Menu burger ---
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burger.classList.toggle("active");
  });

  

  // --- Gestion langue ---
  langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("hidden");
  });

  document.querySelectorAll("#lang-menu button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const lang = e.target.getAttribute("data-lang");
      setLanguage(lang);
      langBtn.textContent = lang.toUpperCase();
      langMenu.classList.add("hidden");
      localStorage.setItem("lang", lang);
    });
  });

  // Fermer le menu si on clique ailleurs
  document.addEventListener("click", (e) => {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.add("hidden");
    }
  });

 
  
  
 const el = document.getElementById('typing');
const cursor = document.querySelector('.cursor');

 




const typeSpeed = 100;    
const deleteSpeed = 50;
const holdDelay = 1500;



function tick() {
  
  const current = roles[roleIndex];
  
  if (!isDeleting) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      safeTimeout(() => { isDeleting = true; tick(); }, holdDelay);
      return;
    }
    safeTimeout(tick, typeSpeed);
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      safeTimeout(tick, 500);
      return;
    }
    safeTimeout(tick, deleteSpeed);
  }
}

// Curseur qui clignote
setInterval(() => {
  cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);
setLanguage(savedLang);
tick(); // lancer l'animation

});
