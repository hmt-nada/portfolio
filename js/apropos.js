// Texte et langue
  const texts = {
    fr: {
      title: 'À propos de moi',
      part1: 'Je suis étudiante en deuxième année du cycle préparatoire à <span class="keyword">l’École Nationale Supérieure d’Informatique (ESI).</span> Passionnée par le développement web et, plus largement, par tout ce qui touche aux technologies modernes (design graphique, marketing digital, e-commerce…), j’aime allier créativité et logique dans mes projets.<br><br>Je maîtrise également les concepts fondamentaux de l’informatique, tels que <span class="keyword">les algorithmes, les structures de données et l’architecture des ordinateurs,</span> ce qui me permet de comprendre le fonctionnement des systèmes en profondeur.<br><br>Actuellement, je me concentre sur <span class="keyword">l’autoformation en développement full-stack</span> afin de renforcer mes compétences techniques. <span class="keyword">Curieuse et motivée</span>, j’aime apprendre, explorer de nouveaux domaines et relever des défis pour enrichir mon expérience.<br><br>',
    },
    en: {
      title: "About Me",
      part1: 'I am a second-year preparatory cycle student at <span class="keyword">the National School of Computer Science (ESI).</span> Passionate about web development and, more broadly, everything related to modern technologies (graphic design, digital marketing, e-commerce…), I enjoy combining creativity and logic in my projects.<br><br>I also master fundamental computer science concepts such as <span class="keyword">algorithms, data structures, and computer architecture,</span> which allows me to deeply understand how systems work.<br><br>Currently, I am focusing on <span class="keyword">self-training in full-stack development</span> to strengthen my technical skills. <span class="keyword">Curious and motivated</span>, I love learning, exploring new fields, and taking on challenges to enrich my experience.',   
    }
  };

function setLanguage(lang) {
    document.querySelector('.about-title').innerHTML = texts[lang].title;
    document.querySelector('.about-text').innerHTML = texts[lang].part1;
     
  }
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