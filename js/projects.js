const projects = [
  {
    id: 1,
    title: 'Mini Blog Application',
    category: 'web',
    image: 'images/mini-blog.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'An very basic web application where some public blog are available as well as Admin panel is available for writing editing blogs.',
    technologies: ['lowdb,', ' Next.js,', ' Node,',  ' Express,', ' JavaScript,', ' Tailwind CSS,'],
    github: 'https://github.com/ManojKumarRabidas/MINI-BLOG',
    live: 'https://youtu.be/zAHp5ZPiB_c?si=pduT3snQ1X3IVZUp',
  },
  {
    id: 2,
    title: 'Resume Builder - A Web Application',
    category: 'web',
    image: 'images/resume-builder.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'An web application where you can build your customize resume with one click..',
    technologies: ['MongoDB,', ' React,', ' Node,',  ' Express,', ' TypeScript,', ' Tailwind CSS,'],
    github: 'https://github.com/ManojKumarRabidas/resume-builder',
    live: 'https://youtube.com/playlist?list=PLpHN6SEszUDQguTxBja_x_3pB-WxHqtcO&si=bMcTJuKV5rnF2CIb',
  },
  {
    id: 3,
    title: 'ChatAGENT - An AI-Powered Chatbot',
    category: 'ai',
    image: 'images/ChatAGENT-icon.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'An AI powered chatbot which can reply the basic queries of users using "qwen2.5:0.5b" model.',
    technologies: ['Python,', ' FastAPI,', ' React,',  ' OLLAMA,', ' MySQL,', ' Model: "qwen2.5:0.5b"'],
    github: 'https://github.com/ManojKumarRabidas/ChatAGENT',
    live: 'content-not-available.html',
  },
  {
    id: 4,
    title: 'StockEZZ - An Inventory & Billing Management System',
    category: 'web',
    image: 'images/stockezz-2.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a web application developed with React-Node which will manage and track the stock, bills, payments for large and medium size company or store.',
    technologies: ['HTML,', ' CSS,', ' JS,', ' React,', ' Node.js(Express),', ' MongoDB'],
    github: 'https://github.com/ManojKumarRabidas/StockEZZ',
    live: 'https://youtube.com/playlist?list=PLpHN6SEszUDSf3pSZNC1I07FkewsEE641&si=IUGyIHjZiK37j4S1',
  },
  {
    id: 5,
    title: 'EduInsights - A Student & Teacher Feedback System',
    category: 'web',
    image: 'images/eduinsights-2.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'College feedback web app enabling students and teachers to exchange feedback. This insight empowers users and college leadership for informed action.',
    technologies: ['HTML,', ' CSS,', ' JS,', ' React,', ' Node.js(Express),', ' MongoDB'],
    github: 'https://github.com/ManojKumarRabidas/EduInsights',
    live: 'https://youtube.com/playlist?list=PLpHN6SEszUDTWEtgSbcO9m3ZHn-Z1tynk&si=xM1hqX_h6z3v5vCz',
  },
  {
    id: 6,
    title: 'EMS – Employee Management System',
    category: 'web',
    image: 'images/ems.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a saas web application for the medium or small size organization to track there employess performation and store their information.',
    technologies: ['HBS,', ' CSS,', ' JS,', ' Node.js(KOA),', ' MongoDB'],
    github: 'https://github.com//ManojKumarRabidas/EMS',
    live: 'content-not-available.html',
  },
  {
    id: 7,
    title: 'HRUToday Doctor Module',
    category: 'web',
    image: 'images/hrutoday.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a web application (product) of RVS Health Care Pvt. Ltd. Developed by Illimitable Consulting Pvt. Ltd. Which has multiple module like Doctor Module, Patient Module, Hospital Module etc.',
    technologies: ['HBS,', ' CSS,', ' JS,', ' Node.js(KOA),', ' Angular.js', ' MongoDB'],
    github: 'content-not-available.html',
    live: 'https://hru.today/'
  },
  {
    id: 8,
    title: 'CTTA Application',
    category: 'web',
    image: 'images/ctta.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a web application used by Calcutta Tea Traders Association and their warehouses for efficient treding of tea.',
    technologies: ['HBS,', ' CSS,', ' JS,', ' Node.js(KOA),', ' Angular.js', ' MongoDB'],
    github: 'content-not-available.html',
    live: 'https://ctta.tealink.in/'
  },
  {
    id: 9,
    title: 'Mentorwallah - A Mentorship Platform',
    category: 'web',
    image: 'images/mentorwallah.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'A web applicatio where anyone can find a specilized mentor. This is a platform where anyone can find a mentor for their career, business, or any other field.',
    technologies: ['HTML,', ' CSS,', ' JS,', ' PHP,', ' MySQL'],
    github: 'content-not-available.html',
    live: 'content-not-available.html',
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
      <img loading="lazy" src="${project.image}" alt="${project.title}">
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