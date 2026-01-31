
// Main JavaScript for Sway Dancers Website

document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('glass-header', 'py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('glass-header', 'py-2');
            header.classList.add('py-4');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            toggleMenu();
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                toggleMenu();
            });
        });

        function toggleMenu() {
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                // Transform hamburger to X
                menuBtn.children[0].classList.add('rotate-45', 'translate-y-2');
                menuBtn.children[1].classList.add('opacity-0');
                menuBtn.children[2].classList.add('-rotate-45', '-translate-y-2');
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
                // Transform X back to hamburger
                menuBtn.children[0].classList.remove('rotate-45', 'translate-y-2');
                menuBtn.children[1].classList.remove('opacity-0');
                menuBtn.children[2].classList.remove('-rotate-45', '-translate-y-2');
            }
        }
    }

    // Animation on Scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(el);
    });
    // Scroll to Top Button Visibility
    const scrollTopBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.remove('opacity-0', 'translate-y-10');
            } else {
                scrollTopBtn.classList.add('opacity-0', 'translate-y-10');
            }
        }
    });
    // Testimonial Scroll Navigation
    const reviewsContainer = document.getElementById('reviews-container');
    const prevReviewBtn = document.getElementById('prev-review');
    const nextReviewBtn = document.getElementById('next-review');

    if (reviewsContainer && prevReviewBtn && nextReviewBtn) {
        prevReviewBtn.addEventListener('click', () => {
            reviewsContainer.scrollBy({ left: -320, behavior: 'smooth' });
        });

        nextReviewBtn.addEventListener('click', () => {
            reviewsContainer.scrollBy({ left: 320, behavior: 'smooth' });
        });
    }
});

// Lightbox Functions (Global scope to be accessible via onclick in HTML)
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const img = element.querySelector('img');

    if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

