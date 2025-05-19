// Highlight current page in navigation
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

// Image gallery hover effect
const images = document.querySelectorAll('.image');
images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
        image.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// Service items interaction
const serviceItems = document.querySelectorAll('.services a');
serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#ff69b4'; // Pink color
        item.style.transition = 'color 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = ''; // Reset to default
    });
});

// Back to top button
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

// Animation on page load
window.addEventListener('load', function() {
    const formContainer = document.querySelector('.form-container');
    const leftImages = document.querySelector('.left');
    const rightImages = document.querySelector('.right');
    
    formContainer.style.opacity = '1';
    formContainer.style.transform = 'translateY(0)';
    
    leftImages.style.opacity = '1';
    leftImages.style.transform = 'translateX(0)';
    
    rightImages.style.opacity = '1';
    rightImages.style.transform = 'translateX(0)';
});

// Make service items clickable (optional)
serviceItems.forEach(item => {
    item.addEventListener('click', function() {
        // You could link each service to a detailed page or show a modal
        alert('Service clicked: ' + this.textContent.trim());
    });
});