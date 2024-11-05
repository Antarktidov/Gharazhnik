{
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    burgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!burgerMenu.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.classList.remove('active');
        }
    });
}