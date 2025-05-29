/**
 * Projects JavaScript file for Manoj Kumar Rabidas Portfolio
 * Author: Manoj Kumar Rabidas
 * Version: 1.0
 */

// Project data
// const projects = [
//   {
//     id: 1,
//     title: 'AI-Powered Task Manager',
//     category: 'ai',
//     image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
//     description: 'A task management application that uses AI to prioritize and categorize tasks for improved productivity.',
//     technologies: ['Python', 'FastAPI', 'React', 'TensorFlow'],
//     github: 'https://github.com/',
//     live: 'https://example.com/'
//   },
//   {
//     id: 2,
//     title: 'E-Commerce Platform',
//     category: 'web',
//     image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
//     description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
//     technologies: ['MERN Stack', 'Redux', 'Stripe API'],
//     github: 'https://github.com/',
//     live: 'https://example.com/'
//   },
//   {
//     id: 3,
//     title: 'Health Tracking Mobile App',
//     category: 'mobile',
//     image: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=600',
//     description: 'A mobile application for tracking health metrics, exercise routines, and nutritional information.',
//     technologies: ['React Native', 'Firebase', 'HealthKit API'],
//     github: 'https://github.com/',
//     live: 'https://example.com/'
//   },
//   {
//     id: 4,
//     title: 'Real-time Chat Application',
//     category: 'web',
//     image: 'https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=600',
//     description: 'A real-time chat application with features like private messaging, group chats, and file sharing.',
//     technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
//     github: 'https://github.com/',
//     live: 'https://example.com/'
//   },
//   {
//     id: 5,
//     title: 'AI Image Recognition Tool',
//     category: 'ai',
//     image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
//     description: 'An image recognition tool that can identify objects, people, and scenes using machine learning algorithms.',
//     technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
//     github: 'https://github.com/',
//     live: 'https://example.com/'
//   },
//   {
//     id: 6,
//     title: 'Fitness Tracker App',
//     category: 'mobile',
//     image: 'https://images.pexels.com/photos/3927385/pexels-photo-3927385.jpeg?auto=compress&cs=tinysrgb&w=600',
//     description: 'A mobile app for tracking workouts, setting fitness goals, and monitoring progress.',
//     technologies: ['React Native', 'Redux', 'Firebase'],
//     github: 'https://github.com/',
//     live: 'https://example.com/'
//   }
// ];

const projects = [
  {
    id: 1,
    title: 'ChatAGENT - An AI-Powered Chatbot',
    category: 'ai',
    image: '/images/ChatAGENT-icon.png?auto=compress&cs=tinysrgb&w=600',
    description: 'A chatbot which can reply the basic query of users.',
    technologies: ['Python,', ' FastAPI,', ' React,',  ' LLM', ' MySQL'],
    github: 'https://github.com/',
    live: 'https://example.com/'
  },
  {
    id: 2,
    title: 'StockEZZ - An Inventory & Billing Management System',
    category: 'web',
    image: '/images/stockezz-2.png?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a web application developed with React-Node which will manage and track the stock, bills, payments for large and medium size company or store.',
    technologies: ['HTML,', ' CSS,', ' JS,', ' React,', ' Node.js(Express),', ' MongoDB'],
    github: 'https://github.com/',
    live: 'https://example.com/'
  },
  {
    id: 3,
    title: 'EduInsights - A Student & Teacher Feedback System',
    category: 'web',
    image: '/images/eduinsights-2.png?auto=compress&cs=tinysrgb&w=600',
    description: 'A feedback giving web application for college. A student will give feedback to his teachers and visa versa. This information of feedback will help the user and the college authority to understand their students and teachers potential and can take necessery decision.',
    technologies: ['HTML,', ' CSS,', ' JS,', ' React,', ' Node.js(Express),', ' MongoDB'],
    github: 'https://github.com/',
    live: 'https://example.com/'
  },
  {
    id: 4,
    title: 'EMS – Employee Management System',
    category: 'web',
    image: '/images/ems.png?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a saas web application for the medium or small size organization to track there employess performation and store their information.',
    technologies: ['HBS,', ' CSS,', ' JS,', ' Node.js(KOA),', ' MongoDB'],
    github: 'https://github.com/',
    live: 'https://example.com/'
  },
  {
    id: 5,
    title: 'HRUToday Doctor Module',
    category: 'web',
    image: '/images/hrutoday.png?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a web application (product) of RVS Health Care Pvt. Ltd. Developed by Illimitable Consulting Pvt. Ltd. Which has multiple module like Doctor Module, Patient Module, Hospital Module etc.',
    technologies: ['HBS,', ' CSS,', ' JS,', ' Node.js(KOA),', ' Angular.js', ' MongoDB'],
    github: 'https://github.com/',
    live: 'https://example.com/'
  },
  {
    id: 6,
    title: 'CTTA Application',
    category: 'web',
    image: '/images/ctta.png?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a web application used by Calcutta Tea Traders Association and their warehouses for efficient treding of tea.',
    technologies: ['HBS,', ' CSS,', ' JS,', ' Node.js(KOA),', ' Angular.js', ' MongoDB'],
    github: 'https://github.com/',
    live: 'https://example.com/'
  },
  {
    id: 6,
    title: 'Mentorwallah - A Mentorship Platform',
    category: 'web',
    image: '/images/mentorwallah.png?auto=compress&cs=tinysrgb&w=600',
    description: 'A web applicatio where anyone can find a specilized mentor. This is a platform where anyone can find a mentor for their career, business, or any other field.',
    technologies: ['HTML,', ' CSS,', ' JS,', ' PHP,', ' MySQL'],
    github: 'https://github.com/',
    live: 'https://example.com/'
  }
];

/**
 * Initialize projects functionality
 */
export function initializeProjects() {
  renderProjects('all');
  initProjectFilter();
}

/**
 * Render projects based on category filter
 * @param {string} filter - Category filter
 */
function renderProjects(filter) {
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.innerHTML = '';
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  filteredProjects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
  
  // Add reveal animation class to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.classList.add('reveal');
    
    // Alternate between reveal-left and reveal-right
    if (index % 2 === 0) {
      card.classList.add('reveal-left');
    } else {
      card.classList.add('reveal-right');
    }
  });
}

/**
 * Create a project card element
 * @param {Object} project - Project data
 * @returns {HTMLElement} - Project card element
 */
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  
  // Create technologies list
  const techList = project.technologies.map(tech => 
    `<span class="project-tech">${tech}</span>`
  ).join('');
  
  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="project-info">
      <div class="project-category">${capitalizeFirstLetter(project.category)}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-techs">
        ${techList}
      </div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" class="project-link">GitHub</a>
        <a href="${project.live}" target="_blank" class="project-link">Live Demo</a>
      </div>
    </div>
  `;
  
  return card;
}

/**
 * Initialize project filter functionality
 */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Get filter value
      const filter = btn.getAttribute('data-filter');
      
      // Render projects based on filter
      renderProjects(filter);
    });
  });
}

/**
 * Capitalize the first letter of a string
 * @param {string} string - The string to capitalize
 * @returns {string} - Capitalized string
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}