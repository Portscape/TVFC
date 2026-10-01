document.getElementById('year').textContent = new Date().getFullYear();

  // Shrink header on scroll
  let isShrunk = false;
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 10 && !isShrunk) { isShrunk = true; header.classList.add('shrink'); }
    else if (y <= 10 && isShrunk) { isShrunk = false; header.classList.remove('shrink'); }
  });

  // Hamburger toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');

  function toggleMenu() {
    const open = navMenu.classList.toggle('active');
    overlay.classList.toggle('active', open);
    hamburgerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  hamburgerBtn.addEventListener('click', toggleMenu);
  hamburgerBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
  });
  overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  });
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }));