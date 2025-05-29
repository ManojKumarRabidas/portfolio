/**
 * Main JavaScript file for Manoj Kumar Rabidas Portfolio
 * Author: Manoj Kumar Rabidas
 * Version: 1.0
 */

// Import modules
import { initializeProjects } from './projects.js';
import { initializeAnimations } from './animations.js';
import { initializeFormHandling } from './form.js';

// DOM Elements
const loader = document.getElementById('loader');
const header = document.getElementById('header');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const themeToggle = document.getElementById('theme-icon');
const scrollToTop = document.querySelector('.scroll-to-top');
const downloadResumeBtn = document.getElementById('download-resume');

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Hide loader after page is loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1000);
  });

  // Initialize all components
  initNavigation();
  initThemeToggle();
  initScrollEvents();
  initializeAnimations();
  initializeProjects();
  initializeFormHandling();
  initDownloadResume();
});

/**
 * Initialize navigation functionality
 */
function initNavigation() {
  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.classList.remove('menu-open');
      
      // Set active nav link
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      navbar.classList.contains('active') &&
      !navbar.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navbar.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

/**
 * Initialize theme toggle functionality
 */
function initThemeToggle() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }

  // Toggle theme when clicking the theme button
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    }
  });
}

/**
 * Initialize scroll events
 */
function initScrollEvents() {
  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (window.scrollY > 500) {
      scrollToTop.classList.add('visible');
    } else {
      scrollToTop.classList.remove('visible');
    }

    // Update active nav link based on scroll position
    updateActiveNavOnScroll();
    
    // Animate elements when scrolled into view
    animateOnScroll();
  });

  // Scroll to top when clicking the button
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

/**
 * Animate elements when they enter the viewport
 */
function animateOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });

  // Animate skill bars when in viewport
  const skillSection = document.getElementById('about');
  const skillBars = document.querySelectorAll('.skill-level');
  
  if (isElementInViewport(skillSection)) {
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.setProperty('--width', level);
      bar.style.width = level;
    });
  }
}

/**
 * Check if an element is in the viewport
 * @param {HTMLElement} el - The element to check
 * @returns {boolean} - True if element is in viewport
 */
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}

/**
 * Initialize resume download functionality
 */
function initDownloadResume() {
  downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Simulate download (in a real site, this would be a link to an actual file)
    alert('Resume download would start here in a real implementation. This is just a demo.');
  });
}