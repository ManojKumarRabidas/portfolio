$(document).ready(function() {
    // Initial tab setup
    $("#technical-blog-tab-menu").addClass("active");
    $("#technical-blog").addClass("active");
    $("#collage-project-tab-menu").addClass("active");
    $("#collage-project").addClass("active");
  
    // Tab switching for Blogs
    $("#technical-blog-tab-menu").click(function() {
      switchTab("technical-blog", ["case-study", "others"]);
    });
    $("#case-study-tab-menu").click(function() {
      switchTab("case-study", ["technical-blog", "others"]);
    });
    $("#other-tab-menu").click(function() {
      switchTab("others", ["technical-blog", "case-study"]);
    });
  
    // Sidebar toggle
    $("#sidebar-toggle, .close-sidebar").click(function() {
      $(".sidebar").toggleClass("active");
    });
  
    // Popup functionality
    $(".show-popup").click(function() {
      $("#popup").fadeIn(300);
    });

    $(".close-popup").click(function() {
      $("#popup").fadeOut(300);
    });
    $(".show-popup2").click(function() {
      $("#popup2").fadeIn(300);
    });

    $(".close-popup2").click(function() {
      $("#popup2").fadeOut(300);
    });

    // GSAP Animations
    gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".hero-image", { opacity: 0, x: 50, duration: 1, delay: 0.8 });
  
    gsap.utils.toArray(".section").forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  });
  
  function switchTab(activeTab, inactiveTabs) {
    $(`#${activeTab}`).addClass("active").siblings().removeClass("active");
    $(`#${activeTab}-tab-menu`).addClass("active").siblings().removeClass("active");
    inactiveTabs.forEach(tab => $(`#${tab}`).removeClass("active"));
  }
  
  function handelProject(type) {
    const tabs = ["collage-project", "hackathon-project", "office-project", "non-academic-project", "other-project"];
    tabs.forEach(tab => {
      $(`#${tab}-tab-menu`).removeClass("active");
      $(`#${tab}`).removeClass("active");
    });
    $(`#${type}-tab-menu`).addClass("active");
    $(`#${type}`).addClass("active");
  }