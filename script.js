// ChronoBid Construction Website JavaScript

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initFormHandling();
    initAnimations();
    initAccessibility();
    
    console.log('ChronoBid website initialized successfully');
});

// Navigation Functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.contains('active');
            
            // Toggle menu
            navMenu.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            navToggle.setAttribute('aria-expanded', !isActive);
            
            // Animate hamburger
            animateHamburger(navToggle, !isActive);
        });
    }
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                animateHamburger(navToggle, false);
            }
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Header scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll (optional enhancement)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Update active navigation based on scroll position
        updateActiveNavOnScroll();
    });
}

// Animate hamburger menu icon
function animateHamburger(toggle, isActive) {
    const lines = toggle.querySelectorAll('.hamburger-line');
    
    if (isActive) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    }
}

// Update active navigation link
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeId) {
            link.classList.add('active');
        }
    });
}

// Update active navigation based on scroll position
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.getElementById('header').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Show/hide back to top button
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Back to top functionality
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Counter animation for stats
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                
                // Stagger animation for grid items
                if (entry.target.classList.contains('services-grid') ||
                    entry.target.classList.contains('benefits-grid') ||
                    entry.target.classList.contains('projects-grid') ||
                    entry.target.classList.contains('testimonials-grid')) {
                    staggerChildrenAnimation(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll(
        '.service-card, .benefit-item, .project-card, .testimonial-card, ' +
        '.stat-number, .services-grid, .benefits-grid, .projects-grid, ' +
        '.testimonials-grid, .section-header'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Counter animation for statistics
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(function() {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format the number based on original content
        let displayValue = Math.floor(current);
        if (element.textContent.includes('+')) {
            displayValue += '+';
        }
        if (element.textContent.includes('%')) {
            displayValue += '%';
        }
        
        element.textContent = displayValue;
    }, duration / steps);
}

// Stagger animation for grid children
function staggerChildrenAnimation(parent) {
    const children = parent.children;
    
    Array.from(children).forEach((child, index) => {
        setTimeout(() => {
            child.classList.add('animate-in');
        }, index * 100); // 100ms delay between each item
    });
}

// Form Handling
function initFormHandling() {
    const quoteForm = document.getElementById('quote-form');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateForm(quoteForm)) {
                // Show loading state
                showFormLoading(quoteForm);
                
                // Simulate form submission (replace with actual submission logic)
                setTimeout(() => {
                    showFormSuccess(quoteForm);
                }, 2000);
                
                // Collect form data
                const formData = new FormData(quoteForm);
                const data = Object.fromEntries(formData);
                
                console.log('Form submitted with data:', data);
                
                // Here you would typically send the data to your server
                // Example: submitFormData(data);
            }
        });
        
        // Real-time validation
        const inputs = quoteForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

// Form validation
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous errors
    clearFieldError(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    else if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Phone validation
    else if (fieldType === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const cleanPhone = value.replace(/\D/g, '');
        if (cleanPhone.length < 10) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    // Show error if validation failed
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');
    
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

// Show form loading state
function showFormLoading(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    submitButton.classList.add('loading');
    
    // Store original text for later restoration
    submitButton.dataset.originalText = originalText;
}

// Show form success state
function showFormSuccess(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    
    submitButton.disabled = false;
    submitButton.textContent = 'Message Sent!';
    submitButton.classList.remove('loading');
    submitButton.classList.add('success');
    
    // Reset form
    form.reset();
    
    // Show success message
    showNotification('Thank you! Your request has been sent. We\'ll contact you within 24 hours.', 'success');
    
    // Reset button after delay
    setTimeout(() => {
        submitButton.textContent = submitButton.dataset.originalText;
        submitButton.classList.remove('success');
    }, 3000);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Close notification">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Close notification functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

// Hide notification
function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// Initialize Animations
function initAnimations() {
    // Add CSS for animations
    const animationStyles = `
        <style>
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .service-card,
        .benefit-item,
        .project-card,
        .testimonial-card,
        .section-header {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
            border-color: var(--accent-red);
            box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2);
        }
        
        .error-message {
            color: var(--accent-red);
            font-size: 0.9rem;
            margin-top: 0.25rem;
            display: block;
        }
        
        .btn.loading {
            position: relative;
            color: transparent;
        }
        
        .btn.loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid transparent;
            border-top-color: currentColor;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        .btn.success {
            background-color: var(--accent-green);
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--white);
            border-left: 4px solid var(--primary-color);
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius-md);
            box-shadow: var(--shadow-lg);
            max-width: 400px;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-success {
            border-left-color: var(--accent-green);
        }
        
        .notification-error {
            border-left-color: var(--accent-red);
        }
        
        .notification-message {
            display: block;
            margin-right: 2rem;
            line-height: 1.4;
        }
        
        .notification-close {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--medium-gray);
            transition: color 0.2s ease;
        }
        
        .notification-close:hover {
            color: var(--dark-gray);
        }
        
        .header.scrolled {
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
        
        .header {
            transition: all 0.3s ease;
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', animationStyles);
}

// Accessibility Improvements
function initAccessibility() {
    // Skip link functionality
    const skipLink = document.createElement('a');
    skipLink.className = 'skip-link';
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main';
    }
    
    // Keyboard navigation for buttons and links
    document.addEventListener('keydown', function(e) {
        // Enter key should activate buttons
        if (e.key === 'Enter' && e.target.classList.contains('btn')) {
            e.target.click();
        }
        
        // Escape key should close mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                animateHamburger(navToggle, false);
                navToggle.focus();
            }
        }
    });
    
    // Announce page changes for screen readers
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            announcePageChange();
        }
    }).observe(document, { subtree: true, childList: true });
}

// Announce page changes to screen readers
function announcePageChange() {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = 'Page content updated';
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Utility Functions

// Debounce function for performance optimization
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Local Storage Utilities
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.warn('Could not read from localStorage:', e);
        return null;
    }
}

// Performance Monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                console.log('Page load time:', pageLoadTime + 'ms');
                
                // Track to analytics (implement as needed)
                // trackEvent('performance', 'page_load_time', pageLoadTime);
            }, 0);
        });
    }
}

// Initialize performance tracking
trackPerformance();

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e);
    
    // Track errors (implement as needed)
    // trackEvent('error', 'javascript_error', e.message);
});

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch(function(registrationError) {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}

// Export functions for testing or external use
window.ChronoBid = {
    validateForm,
    validateField,
    showNotification,
    saveToLocalStorage,
    getFromLocalStorage
};