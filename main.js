/* ===================================
   cihat.app - Interactive JavaScript
   Smooth Animations & Interactions
   =================================== */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypingEffect();
    initParticles();
    initCursorGlow();
    initScrollAnimations();
    initSkillBars();
    initCounterAnimation();
});

// Global functions for inline handlers
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function setLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
    // Restart typing effect
    initTypingEffect();
}

function closeEasterEgg() {
    const overlay = document.getElementById('easter-egg-overlay');
    if (overlay) overlay.classList.remove('active');
}

/* ===================================
   NAVIGATION
   =================================== */
function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect for navigation
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('active');
            navLinks?.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ===================================
   TYPING EFFECT
   =================================== */
let typingTimeoutId = null; // Track timeout to cancel on language change

function initTypingEffect() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    // Clear any existing typing animation
    if (typingTimeoutId) {
        clearTimeout(typingTimeoutId);
        typingTimeoutId = null;
    }

    const lang = document.documentElement.getAttribute('lang') || 'en';

    const phrases = {
        tr: [
            'Flutter ile mobil uygulamalar geliştiriyorum',
            'iOS ve Android platformlarında çalışıyorum',
            'Kullanıcı deneyimine odaklanıyorum',
            'Temiz kod yazmayı seviyorum',
            'Performans optimizasyonu yapıyorum'
        ],
        en: [
            'Building mobile apps with Flutter',
            'Working on iOS and Android platforms',
            'Focusing on user experience',
            'Writing clean and maintainable code',
            'Optimizing app performance'
        ]
    };

    const currentPhrases = phrases[lang] || phrases.en;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = currentPhrases[phraseIndex];

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % currentPhrases.length;
            typingSpeed = 500; // Pause before next phrase
        }

        typingTimeoutId = setTimeout(type, typingSpeed);
    }

    // Clear any existing typing and start fresh
    typingText.textContent = '';
    charIndex = 0;
    phraseIndex = 0;
    isDeleting = false;

    typingTimeoutId = setTimeout(type, 1000);
}

/* ===================================
   PARTICLES BACKGROUND
   =================================== */
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random animation delay and duration
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${15 + Math.random() * 15}s`;

        // Random opacity
        particle.style.opacity = `${0.1 + Math.random() * 0.3}`;

        container.appendChild(particle);
    }
}

/* ===================================
   CURSOR GLOW EFFECT
   =================================== */
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;

    // Only enable on desktop
    if (window.matchMedia('(hover: hover)').matches) {
        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth follow animation
        function animate() {
            const dx = mouseX - glowX;
            const dy = mouseY - glowY;

            glowX += dx * 0.1;
            glowY += dy * 0.1;

            cursorGlow.style.left = `${glowX}px`;
            cursorGlow.style.top = `${glowY}px`;

            requestAnimationFrame(animate);
        }

        animate();
    } else {
        cursorGlow.style.display = 'none';
    }
}

/* ===================================
   SCROLL ANIMATIONS
   =================================== */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // If it's a stat item, trigger counter animation
                if (entry.target.classList.contains('stat-item')) {
                    const statNumber = entry.target.querySelector('.stat-number');
                    if (statNumber) animateCounter(statNumber);
                }

                // If it's a skill item, trigger fill animation
                if (entry.target.classList.contains('skill-item')) {
                    const fill = entry.target.querySelector('.skill-progress');
                    const progress = fill?.getAttribute('data-progress');
                    if (fill && progress) {
                        setTimeout(() => {
                            fill.style.width = `${progress}%`;
                        }, 200);
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });

    // Observe stat items
    document.querySelectorAll('.stat-item').forEach(el => {
        observer.observe(el);
    });

    // Observe skill items
    document.querySelectorAll('.skill-item').forEach(el => {
        observer.observe(el);
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(el);
    });
}

/* ===================================
   SKILL BARS ANIMATION
   =================================== */
function initSkillBars() {
    // Set initial width to 0 for skill progress bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

/* ===================================
   COUNTER ANIMATION
   =================================== */
function animateCounter(element) {
    if (!element || element.classList.contains('counted')) return;
    element.classList.add('counted');

    // Get target from data-count attribute
    const target = parseFloat(element.getAttribute('data-count'));
    if (isNaN(target)) return;

    // Get suffix from sibling element
    const wrapper = element.parentElement;
    const suffix = wrapper?.querySelector('.stat-suffix')?.textContent || '';

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;
    const increment = target / steps;
    const isDecimal = target % 1 !== 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        if (isDecimal) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.round(current);
        }
    }, stepDuration);
}

function initCounterAnimation() {
    // Counters will be triggered by scroll animation observer
}

/* ===================================
   EASTER EGG
   =================================== */
// Easter egg is handled by ee.js file
// This function adds keyboard support
(function initEasterEggKeyboard() {
    const overlay = document.getElementById('easter-egg-overlay');

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay?.classList.contains('active')) {
            overlay.classList.remove('active');
        }
    });

    // Close when clicking overlay background
    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
})();

/* ===================================
   UTILITY FUNCTIONS
   =================================== */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add loaded class to body when page is fully loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
