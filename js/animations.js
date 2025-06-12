/**
 * Animations JavaScript file for Manoj Kumar Rabidas Portfolio
 * Author: Manoj Kumar Rabidas
 * Version: 1.0
 */

/**
 * Initialize animations
 */
export function initializeAnimations() {
  // Add animation classes to elements
  setupRevealAnimations();
  setupHeroAnimation();
  setupParticleAnimation();
}

/**
 * Setup reveal animations for sections
 */
function setupRevealAnimations() {
  // Add reveal class to section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.classList.add('reveal', 'reveal-bottom');
  });
  
  // Add reveal class to about section content
  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
    aboutText.classList.add('reveal', 'reveal-left');
  }
  
  const skills = document.querySelector('.skills');
  if (skills) {
    skills.classList.add('reveal', 'reveal-right');
  }
  
  // Add reveal class to resume timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.classList.add('reveal');
    if (index % 2 === 0) {
      item.classList.add('reveal-left');
    } else {
      item.classList.add('reveal-right');
    }
  });
  
  // Add reveal class to contact section
  const contactInfo = document.querySelector('.contact-info');
  if (contactInfo) {
    contactInfo.classList.add('reveal', 'reveal-left');
  }
  
  const contactForm = document.querySelector('.contact-form-container');
  if (contactForm) {
    contactForm.classList.add('reveal', 'reveal-right');
  }
}

/**
 * Setup hero section animations
 */
function setupHeroAnimation() {
  // Add floating animation to profile picture
  const profilePic = document.getElementById('profile-pic');
  if (profilePic) {
    profilePic.parentElement.classList.add('floating');
  }
  
  // Add random movement to background shapes
  animateShapes();
}

/**
 * Animate background shapes
 */
function animateShapes() {
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach(shape => {
    // Random position animation
    const randomX = Math.random() * 20 - 10; // Random value between -10 and 10
    const randomY = Math.random() * 20 - 10; // Random value between -10 and 10
    const randomDuration = 5 + Math.random() * 10; // Random duration between 5 and 15 seconds
    const randomDelay = Math.random() * 5; // Random delay between 0 and 5 seconds
    
    shape.style.animation = `moveShape ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
    
    // Add keyframe animation dynamically
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes moveShape {
        0% { transform: translate(0, 0); }
        100% { transform: translate(${randomX}px, ${randomY}px); }
      }
    `;
    
    try {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    } catch (e) {
      console.warn('Could not insert keyframe rule:', e);
    }
  });
}

/**
 * Setup particle animation for the background
 * This is a simpler version of a particle system
 */
function setupParticleAnimation() {
  // Create and append canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  document.body.appendChild(canvas);

  // Initialize canvas and context
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  // Particle class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
        this.reset();
      }
    }

    draw() {
      ctx.fillStyle = `rgba(66, 99, 235, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }

  // Create particles
  const particles = [];
  const particleCount = Math.min(window.innerWidth / 20, 50); // Adjust number based on screen width
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    requestAnimationFrame(animate);
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Start animation
  animate();
}