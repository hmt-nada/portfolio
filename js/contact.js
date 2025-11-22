// Texte et langue
const texts = {
  fr: {
    title: 'Me Contacter',
    intro: "Vous avez une idée de projet ? Contactez-moi pour que nous collaborions et donnions vie à quelque chose d’extraordinaire.",
    cord:"Mes coordonnées",
    notif:"✔️ Votre message a bien été envoyé ! Je vous répondrai dans les plus brefs délais.",
    pays:"Algérie",
    name:"Nom",
    envoyer:"Envoyer",
  },
  en: {
    title: "Contact Me",
    intro:"Do you have a project idea? Contact me so we can collaborate and bring something extraordinary to life.",
    cord:"My Contact Information",
    notif:"✔️ Your message has been successfully sent! I will get back to you as soon as possible.",
    pays:"Algeria",
    name:"Name",
    envoyer:"Submit",
  }
};

function setLanguage(lang) {
  document.querySelector('.section-title').textContent = texts[lang].title;
  document.querySelector('.sectionsoustitre').textContent = texts[lang].intro;
  document.querySelector('.contact-info h3').textContent = texts[lang].cord;
  document.getElementById('pays-text').textContent = texts[lang].pays;
  document.getElementById('label-name').textContent = texts[lang].name;
  document.querySelector('.btn-text').textContent = texts[lang].envoyer;
  document.getElementById('successMessage').textContent=texts[lang].notif;
}

document.addEventListener("DOMContentLoaded", () => {
  const leftElements = document.querySelectorAll(".slide-left");

setTimeout(() => {
  leftElements.forEach(element => {
    element.classList.add("slide-visible");
  });
}, 200);
const cards = document.querySelectorAll(".card");

  cards.forEach((card, i) => {
    card.style.animationDelay = (i * 0.15) + "s";
  });
  // Appliquer langue sauvegardée ou FR
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);

  /* Envoi email */
  const form = document.querySelector(".contact-form");
  const btn = document.querySelector(".btn");
const btnText = document.querySelector(".btn-text");
const loader = document.querySelector(".loader");

  document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
// Active le loader
    btn.disabled = true;
    btnText.style.display = "none";
    loader.style.display = "inline-block";

    emailjs.send("service_ds2bbeo", "template_vlvvnjn", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }, "Lx_FliwYDBJFxCIbm")
    .then(() => {
        // Message succès
        document.getElementById("successMessage").style.display = "block";
        document.querySelector(".contact-form").reset();
// Retour état normal du bouton
        btn.disabled = false;
        btnText.style.display = "inline";
        loader.style.display = "none";

        setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
        }, 4000);

    })
    .catch((error) => {
        alert("❌ Une erreur est survenue. Veuillez réessayer.");
        console.log(error);
        // Remettre le bouton normal même en erreur
        btn.disabled = false;
        btnText.style.display = "inline";
        loader.style.display = "none";
    });
});

});
