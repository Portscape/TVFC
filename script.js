document.addEventListener("DOMContentLoaded", () => {
    console.log("Website for True Vine Family Church is live!");

    // Variables to track header and menu states
    let isShrunk = false;  // Track if header is already shrunk
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('nav');
    
    // Shrink header, logo, and move nav on scroll
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > 0 && !isShrunk) {
            isShrunk = true;
            header.classList.add('shrink');
            logo.classList.add('shrink');
            nav.classList.add('shrink');
        } else if (currentScrollPosition === 0 && isShrunk) {
            isShrunk = false;
            header.classList.remove('shrink');
            logo.classList.remove('shrink');
            nav.classList.remove('shrink');
        }
    });

    // Hamburger Button to toggle navigation menu visibility
    const hamburgerBtn = document.querySelector('.hamburger-btn');s
    const navLinks = document.querySelector('.nav-links');
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


