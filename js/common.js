function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/portfolio/')) return '/portfolio/';
    if (path.includes('/v2/') || path.includes('index.html')) return '/';
    return '/'; // fallback
  }

  function getVersionUrl(relativePath) {
    const base = window.location.origin + getBasePath();
    return base + relativePath;
  }

  window.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('version-switcher');
    const currentPath = window.location.pathname;

    for (let i = 0; i < selector.options.length; i++) {
      const expectedPath = getBasePath() + selector.options[i].value;
      if (currentPath.endsWith(selector.options[i].value) || currentPath === expectedPath) {
        selector.selectedIndex = i;
        break;
      }
    }
  });
