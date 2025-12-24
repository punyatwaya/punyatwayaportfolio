let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document
                .querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);
};

// mobile menu toggle
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};
