window.addEventListener('scroll', function() {
    const navigationMenu = document.querySelector('.navigation-menu');
    if (window.scrollY > 100) { // Adjust the scroll value as needed
        navigationMenu.classList.add('scrolled');
    } else {
        navigationMenu.classList.remove('scrolled');
    }
});
