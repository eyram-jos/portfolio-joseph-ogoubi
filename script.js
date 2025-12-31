
// FOND HERO PARTICULES
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const colors = ['#4f46e5','#ffffff','#8888ff'];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

function init() {
  particlesArray.length = 0;
  for(let i=0;i<100;i++){
    particlesArray.push(new Particle());
  }
}
init();

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// ANIMATION SCROLL SECTIONS
const sections = document.querySelectorAll('.section');

function revealSections(){
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 120){
      sec.classList.add('show');
    }
  });
}

// Au scroll
window.addEventListener('scroll', revealSections);
// Au chargement pour afficher celles déjà visibles
window.addEventListener('load', revealSections);




const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
  const sectionTop = section.offsetTop - 80;
  if (window.scrollY >= sectionTop) {
    currentSection = section.getAttribute('id');
  }
});


  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});


// ===== SCROLL ANIMATION SKILLS =====
const skillCards = document.querySelectorAll(".skill-card");

const revealSkills = () => {
  skillCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;

    if (cardTop < triggerPoint) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSkills);
window.addEventListener("load", revealSkills);


const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  ".project-card, .skill-card, .about-text, .about-photo, .timeline-item"
).forEach(el => observer.observe(el));


const form = document.querySelector(".contact-form");
const success = document.querySelector(".form-success");

form.addEventListener("submit", () => {
  setTimeout(() => {
    success.style.display = "block";
  }, 500);
});

