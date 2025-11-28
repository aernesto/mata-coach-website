document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Preloader Logic
    // Allow the browser to load assets, then remove the loader
    window.addEventListener('load', function() {
        const loader = document.getElementById('preloader');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    document.body.classList.add('loaded'); // Trigger hero animations if needed
                }, 500);
            }, 500); // Short delay for smoothness
        }
    });

    // 2. Intersection Observer for Fade-in Animations
    // This finds all elements with .fade-in-up and adds .visible when they scroll into view
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // 3. Simple Sticky Nav Logic (Optional reinforcement)
    // CSS position:sticky usually handles this, but we can add a class if we want to shrink it
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});