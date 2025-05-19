// Smooth scrolling for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the current page in the navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navButtons = document.querySelectorAll('.nav-buttons a');

    navButtons.forEach(button => {
        const buttonPage = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (buttonPage === currentPage) {
            button.classList.add('active');
        }
    });
});

// Optional: Add a simple animation when the page loads
window.addEventListener('load', function() {
    document.querySelector('.form-container').style.opacity = '1';
    document.querySelector('.form-container').style.transform = 'translateY(0)';
});

// Optional: Form submission handling (if you add a contact form later)
document.querySelector('.prices-button').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'prices.html';
});

// Optional: Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.classList.add('back-to-top');
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});