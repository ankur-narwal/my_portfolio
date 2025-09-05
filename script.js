// Typewriter effect
const nameText = "Ankur Narwal..";
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

// Highlight active nav link 
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

// Animation for Introduction Section
const introSection = document.querySelector('.intro-section');

function animateIntro() {
  const rect = introSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight * 0.8) {
    introSection.classList.add('intro-visible');
    window.removeEventListener('scroll', animateIntro); // Only animate once
  }
}

window.addEventListener('scroll', animateIntro);

//dialog box 
// Get elements
const openDialog = document.getElementById("openDialog");
const customDialog = document.getElementById("customDialog");
const closeDialog = document.getElementById("closeDialog");

// Open dialog
openDialog.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent link jump
  customDialog.style.display = "flex"; // Show dialog
});

// Close dialog
closeDialog.addEventListener("click", function() {
  customDialog.style.display = "none"; // Hide dialog
});

// Close if clicking outside box
window.addEventListener("click", function(e) {
  if (e.target === customDialog) {
    customDialog.style.display = "none";
  }
});


// Blog 1
document.getElementById("openBlog1").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("blogDialog1").style.display = "flex";
});
document.getElementById("closeBlog1").addEventListener("click", function() {
  document.getElementById("blogDialog1").style.display = "none";
});

// Blog 2
document.getElementById("openBlog2").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("blogDialog2").style.display = "flex";
});
document.getElementById("closeBlog2").addEventListener("click", function() {
  document.getElementById("blogDialog2").style.display = "none";
});

// Blog 3
document.getElementById("openBlog3").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("blogDialog3").style.display = "flex";
});
document.getElementById("closeBlog3").addEventListener("click", function() {
  document.getElementById("blogDialog3").style.display = "none";
});

// Close dialog if clicking outside content
window.addEventListener("click", function(e) {
  if (e.target.classList.contains("custom-dialog")) {
    e.target.style.display = "none";
  }
});
