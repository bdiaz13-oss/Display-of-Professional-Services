// Small UI helpers: reveal on scroll + mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  // Reveal on scroll
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', () => {
    if (siteNav.style.display === 'block') {
      siteNav.style.display = '';
    } else {
      siteNav.style.display = 'block';
    }
  });
});
