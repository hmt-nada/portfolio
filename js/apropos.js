// Texte et langue
  const texts = {
    fr: {
      title: 'À propos de moi',
      part1: 'Je suis étudiante en deuxième année du cycle préparatoire à <span class="keyword">l’École Nationale Supérieure d’Informatique (ESI).</span> Passionnée par le développement web et plus largement par les technologies modernes (design graphique, marketing digital, e-commerce…), j’aime concevoir des projets qui allient <span class="keyword">créativité et logique</span>.<br><br>Je maîtrise également les concepts fondamentaux de l’informatique, tels que <span class="keyword">les algorithmes, les structures de données et l’architecture des ordinateurs</span>, ce qui me permet de comprendre les systèmes en profondeur et de développer des solutions plus solides.<br><br>Actuellement, je me concentre sur <span class="keyword">l’autoformation en développement full-stack</span> afin de renforcer mes compétences techniques à travers des projets concrets. <span class="keyword">Curieuse et motivée</span>, j’aime apprendre, explorer de nouveaux domaines et relever des défis pour progresser continuellement.',
    },
    en: {
      title: "About Me",
      part1: 'I am a second-year preparatory cycle student at <span class="keyword">the National School of Computer Science (ESI).</span> Passionate about web development and modern technologies (graphic design, digital marketing, e-commerce…), I enjoy building projects that combine <span class="keyword">creativity and logic</span>.<br><br>I also have a solid understanding of core computer science concepts such as <span class="keyword">algorithms, data structures, and computer architecture</span>, allowing me to better understand how systems work and design efficient solutions.<br><br>Currently, I am focusing on <span class="keyword">self-training in full-stack development</span> to strengthen my technical skills through hands-on projects. <span class="keyword">Curious and motivated</span>, I enjoy learning, exploring new fields, and taking on challenges to continuously improve.',   
    }
  };

function setLanguage(lang) {
    document.querySelector('.about-title').innerHTML = texts[lang].title;
    document.querySelector('.about-text').innerHTML = texts[lang].part1;

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
  // --- Appliquer langue sauvegardée ou FR par défaut ---
  const savedLang = localStorage.getItem("lang") || "fr";
setLanguage(savedLang);
const box = document.querySelector(".slide-left");
  const texts = document.querySelectorAll(".slide-down");

  // Afficher le cadre (glisse gauche)
  setTimeout(() => {
    box.classList.add("slide-visible");
  }, 200);

  // Afficher le texte (glisse haut)
  setTimeout(() => {
    texts.forEach(t => t.classList.add("slide-visible"));
  }, 400);

});