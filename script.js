// script.js for scroll animations and hover effects

// Scroll animations
function scrollAnimation() {
    // Implement scroll animations logic
}

// Fixed positioning and progress line
function fixedPosition() {
    const progressLine = document.createElement('div');
    progressLine.style.position = 'fixed';
    progressLine.style.top = '0';
    progressLine.style.width = '100%';
    progressLine.style.height = '5px';
    progressLine.style.backgroundColor = '#FF5511';
    document.body.appendChild(progressLine);
}

// Cursor hover interactions
function cursorHover() {
    document.body.style.cursor = 'url(cursor-displacement.png), auto';
    // Other hover effects
}

// Image grayscale with orange edge glow on hover
function imageHoverEffect() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.filter = 'grayscale(100%)';
        img.style.transition = 'filter 600ms';
        img.addEventListener('mouseover', () => {
            img.style.filter = 'grayscale(0%)';
            img.style.boxShadow = '0 0 10px #FF5511';
        });
        img.addEventListener('mouseout', () => {
            img.style.filter = 'grayscale(100%)';
            img.style.boxShadow = 'none';
        });
    });
}

// Slow reveal animations
function slowReveal() {
    const elements = document.querySelectorAll('.slow-reveal');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 1200ms ease-in-out';
        el.addEventListener('load', () => { el.style.opacity = '1'; });
    });
}

// Initialize all functions
window.onload = function() {
    scrollAnimation();
    fixedPosition();
    cursorHover();
    imageHoverEffect();
    slowReveal();
};
