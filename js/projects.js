const projects = [
  {
    id: 11,
    title: 'SaktiByte Solutions Website',
    category: 'web',
    image: 'images/saktibyte.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'A Software solution company website for SaktiByte Solutions, showcasing services, portfolio, and contact information. Its a complete fullstack web application with admin panel to manage the content of the website.',
    technologies: ['Node', 'Express', 'React-vite', 'MongoDB ', 'Tailwind', 'JWT'],
    level: "Advanced",
    type: "Personal",
    github: 'https://github.com/ManojKumarRabidas/saktibyte.git',
    live: 'https://saktibyte.vercel.app/',
    demo: 'content-not-available.html',
  },
  {
    id: 10,
    title: 'EduInsights V2.0',
    category: 'web',
    image: 'images/eduinsights-20.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'This is an <strong>under-development</strong> project. EduInsights V2.0 is a comprehensive school and college management system designed to streamline administrative tasks, enhance communication, and improve overall efficiency in educational institutions.',
    technologies: ['Node', 'Express', 'React-vite', 'MongoDB ', 'Bootstrap', 'JWT'],
    level: "Advanced",
    type: "Personal",
    github: 'https://github.com/ManojKumarRabidas/EduInsights-v2.git',
    live: 'content-not-available.html',
    demo: 'content-not-available.html',
  },
  {
    id: 10,
    title: 'AI-Powered Appointment Booking',
    category: 'ai',
    image: 'images/AI-Appointment-booking.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'Build a healthcare scheduling system with Gemini 2.0 Flash. Book, cancel, or reschedule appointments effortlessly using natural conversation - no manual forms or complex processes required.',
    technologies: ['Node', 'Express', 'React-vite', 'Gemini 2.0 Flash ', 'Google Calendar API', 'Tailwind CSS'],
    level: "Intermediate",
    type: "Personal",
    github: 'https://github.com/ManojKumarRabidas/voice-agent.git',
    live: 'content-not-available.html',
    demo: 'https://youtube.com/playlist?list=PLpHN6SEszUDQPwJGdlD4xfAK3A33ow4aO&si=0tki7q0mpBQSkiOl',
  },
  {
    id: 9,
    title: 'Mini Blog Application',
    category: 'web',
    image: 'images/mini-blog.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'An very basic web application where some public blog are available as well as Admin panel is available for writing editing blogs.',
    technologies: ['lowdb', ' Next.js', ' Node', ' Express', ' JavaScript', ' Tailwind CSS'],
    level: "Basic",
    type: "Personal",
    github: 'https://github.com/ManojKumarRabidas/MINI-BLOG',
    live: 'content-not-available.html',
    demo: 'https://youtu.be/zAHp5ZPiB_c?si=pduT3snQ1X3IVZUp',
  },
  {
    id: 8,
    title: 'Resume Builder',
    category: 'web',
    type: "Personal",
    image: 'images/resume-builder.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'An web application where you can build your customize resume with one click..',
    technologies: ['MongoDB', ' React', ' Node', ' Express', ' TypeScript', ' Tailwind CSS'],
    level: "Intermediate",
    github: 'https://github.com/ManojKumarRabidas/resume-builder',
    live: 'content-not-available.html',
    demo: 'https://youtube.com/playlist?list=PLpHN6SEszUDQguTxBja_x_3pB-WxHqtcO&si=bMcTJuKV5rnF2CIb',
  },
  {
    id: 7,
    title: 'ChatAGENT',
    category: 'ai',
    type: "Personal",
    image: 'images/ChatAGENT-icon.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'An AI powered chatbot which can reply the basic queries of users using "qwen2.5:0.5b" model.',
    technologies: ['Python', ' FastAPI', ' React', ' OLLAMA', ' MySQL', ' Model: "qwen2.5:0.5b"'],
    level: "Basic",
    github: 'https://github.com/ManojKumarRabidas/ChatAGENT',
    live: 'content-not-available.html',
    demo: 'content-not-available.html',
  },
  {
    id: 6,
    title: 'StockEZZ',
    category: 'web',
    type: "Personal",
    image: 'images/stockezz-2.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a web application developed with React-Node which will manage and track the stock, bills, payments for large and medium size company or store.',
    technologies: ['HTML', ' CSS', ' JS', ' React', ' Node.js(Express)', ' MongoDB'],
    level: "Advanced",
    github: 'https://github.com/ManojKumarRabidas/StockEZZ',
    live: 'https://stockezz.vercel.app/',
    demo: 'https://youtube.com/playlist?list=PLpHN6SEszUDSf3pSZNC1I07FkewsEE641&si=IUGyIHjZiK37j4S1',
  },
  {
    id: 5,
    title: 'EduInsights',
    category: 'web',
    type: "Team Project",
    image: 'images/eduinsights-2.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'College feedback web app enabling students and teachers to exchange feedback. This insight empowers users and college leadership for informed action.',
    technologies: ['HTML', ' CSS', ' JS', ' React', ' Node.js(Express)', ' MongoDB'],
    level: "Advanced",
    github: 'https://github.com/ManojKumarRabidas/EduInsights',
    live: 'content-not-available.html',
    demo: 'https://youtube.com/playlist?list=PLpHN6SEszUDTWEtgSbcO9m3ZHn-Z1tynk&si=xM1hqX_h6z3v5vCz',
  },
  {
    id: 4,
    title: 'Employee Management System',
    category: 'web',
    type: "Personal",
    image: 'images/ems.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a saas web application for the medium or small size organization to track their employess performation and store their information.',
    technologies: ['HBS', ' CSS', ' JS', ' Node.js(KOA)', ' MongoDB'],
    level: "Intermediate",
    github: 'https://github.com//ManojKumarRabidas/EMS',
    live: 'content-not-available.html',
    demo: 'content-not-available.html',
  },
  {
    id: 3,
    title: 'HRUToday [Doctor]',
    category: 'web',
    type: "Client Work",
    image: 'images/hrutoday.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a web application (product) of RVS Health Care Pvt. Ltd. Developed by Illimitable Consulting Pvt. Ltd. Which has multiple module like Doctor Module, Patient Module, Hospital Module etc.',
    technologies: ['HBS', ' CSS', ' JS', ' Node.js(KOA)', ' Angular.js', ' MongoDB'],
    level: "Advanced",
    github: 'content-not-available.html',
    live: 'https://hru.today/',
    demo: 'content-not-available.html',
  },
  {
    id: 2,
    title: 'CTTA Application',
    category: 'web',
    type: "Client Work",
    image: 'images/ctta.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'This is a web application used by Calcutta Tea Traders Association and their warehouses for efficient treding of tea developed by Illimitable Consulting Pvt. Ltd.',
    technologies: ['HBS', ' CSS', ' JS', ' Node.js(KOA)', ' Angular.js', ' MongoDB'],
    level: "Advanced",
    github: 'content-not-available.html',
    live: 'https://ctta.tealink.in/',
    demo: 'content-not-available.html',
  },
  {
    id: 1,
    title: 'Mentorwallah',
    category: 'web',
    type: "Team Project",
    image: 'images/mentorwallah.webp?auto=compress&cs=tinysrgb&w=600',
    description: 'A web applicatio where anyone can find a specilized mentor. This is a platform where anyone can find a mentor for their career, business, or any other field.',
    technologies: ['HTML', ' CSS', ' JS', ' PHP', ' MySQL'],
    level: "Basic",
    github: 'content-not-available.html',
    live: 'content-not-available.html',
    demo: 'content-not-available.html',
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
    `<span class="project-tech">
      ${tech}
    </span>`
  ).join('');

  card.innerHTML = `
  <div class="project-card-content">
    <div class="project-image">
      <img loading="lazy" src="${project.image}" alt="${project.title}">
    </div>
    <div class="project-info">
      <div class="project-category">${capitalizeFirstLetter(project.category)}</div>
      <div class="project-category">${project.level}</div>
      <div class="project-category">${project.type}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-techs">
        ${techList}
      </div>
      </div>
      </div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" title="${project.github == "content-not-available.html" ? "Not available" : "Available"}" class="${project.github == "content-not-available.html" ? "project-link project-not-available" : "project-link"}"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>GitHub
        </a>
        <a href="${project.demo}" target="_blank" title="${project.demo == "content-not-available.html" ? "Not available" : "Available"}" class="${project.demo == "content-not-available.html" ? "project-link project-not-available" : "project-link"}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
          </svg>Demo
        </a>
        <a href="${project.live}" target="_blank" title="${project.live == "content-not-available.html" ? "Not available" : "Available"}" class="${project.live == "content-not-available.html" ? "project-link project-not-available" : "project-link"}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
          </svg>Live
        </a>
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