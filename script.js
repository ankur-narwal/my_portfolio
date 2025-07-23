// Typewriter effect for "Ankur Narwal"
const nameText = "Ankur Narwal";
let i = 0;
const speed = 120;
const nameElement = document.getElementById("typed-name");

function typeWriter() {
  if (i < nameText.length) {
    nameElement.innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Highlight active nav link while scrolling
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');

function highlightSection() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
  });
}

window.addEventListener("scroll", highlightSection);
window.addEventListener("load", typeWriter);

// Fade-in & Slide-in Animation for Introduction Section
const introSection = document.querySelector('.intro-section');

function animateIntro() {
  const rect = introSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight * 0.8) {
    introSection.classList.add('intro-visible');
    window.removeEventListener('scroll', animateIntro); // Only animate once
  }
}

window.addEventListener('scroll', animateIntro);
