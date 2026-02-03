/**
 * AETERNA EVENTS — Main JavaScript
 * Mobile menu, navbar transparency, scroll animations, contact form
 */

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // DOM Elements
  // ═══════════════════════════════════════════════════════════════════════════

  const navbar = document.getElementById('navbar');
  const hamburger = document.querySelector('.navbar-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  const hero = document.querySelector('.hero');
  const heroAnimElements = document.querySelectorAll('.hero-anim');
  const fadeElements = document.querySelectorAll('.fade-in');
  const staggerContainers = document.querySelectorAll('.stagger-children');
  const scaleElements = document.querySelectorAll('.scale-in');
  const contactForm = document.getElementById('contact-form');

  // ═══════════════════════════════════════════════════════════════════════════
  // Mobile Menu
  // ═══════════════════════════════════════════════════════════════════════════

  function toggleMobileMenu() {
    const isOpen = hamburger.classList.contains('active');

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');

    // Update ARIA attributes
    hamburger.setAttribute('aria-expanded', !isOpen);
    mobileMenu.setAttribute('aria-hidden', isOpen);
  }

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Navbar Transparency
  // ═══════════════════════════════════════════════════════════════════════════

  function handleNavbarScroll() {
    if (!hero || !navbar) return;

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navbar.classList.remove('navbar--scrolled');
          } else {
            navbar.classList.add('navbar--scrolled');
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px'
      }
    );

    heroObserver.observe(hero);
  }

  // If no hero section, always show solid navbar
  if (navbar && !hero) {
    navbar.classList.add('navbar--scrolled');
  } else {
    handleNavbarScroll();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Hero Entrance Animation
  // ═══════════════════════════════════════════════════════════════════════════

  function animateHero() {
    if (!heroAnimElements.length) return;

    // Small delay to ensure page is ready
    setTimeout(() => {
      heroAnimElements.forEach(el => {
        el.classList.add('visible');
      });
    }, 100);
  }

  animateHero();

  // ═══════════════════════════════════════════════════════════════════════════
  // Scroll Animations
  // ═══════════════════════════════════════════════════════════════════════════

  function initScrollAnimations() {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation to improve performance
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all animation elements
    fadeElements.forEach(el => animationObserver.observe(el));
    staggerContainers.forEach(el => animationObserver.observe(el));
    scaleElements.forEach(el => animationObserver.observe(el));
  }

  initScrollAnimations();

  // ═══════════════════════════════════════════════════════════════════════════
  // Contact Form
  // ═══════════════════════════════════════════════════════════════════════════

  function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Check honeypot field
    const honeypot = form.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) {
      // Bot detected, silently fail
      showFormSuccess(form);
      return;
    }

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Get form action URL (Formspree endpoint)
    const actionUrl = form.getAttribute('action');

    fetch(actionUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        showFormSuccess(form);
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Form error:', error);
      showFormError(form, submitBtn, originalBtnText);
    });
  }

  function showFormSuccess(form) {
    const formContainer = form.parentElement;

    // Create success message
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success fade-in';
    successMsg.innerHTML = `
      <h3>Thank you</h3>
      <p>We've received your message and will be in touch shortly.</p>
    `;

    // Replace form with success message
    form.style.display = 'none';
    formContainer.appendChild(successMsg);

    // Trigger animation
    setTimeout(() => {
      successMsg.classList.add('visible');
    }, 50);
  }

  function showFormError(form, submitBtn, originalText) {
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;

    // Show error message
    let errorMsg = form.querySelector('.form-error-message');
    if (!errorMsg) {
      errorMsg = document.createElement('p');
      errorMsg.className = 'form-error-message';
      errorMsg.style.color = 'var(--accent-warm)';
      errorMsg.style.marginTop = 'var(--space-md)';
      errorMsg.style.fontFamily = 'var(--font-sans)';
      errorMsg.style.fontSize = 'var(--text-sm)';
      form.appendChild(errorMsg);
    }
    errorMsg.textContent = 'Something went wrong. Please try again or email us directly.';
  }

  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Form Validation (Optional Enhancement)
  // ═══════════════════════════════════════════════════════════════════════════

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showFieldError(field, message) {
    let errorEl = field.parentElement.querySelector('.form-error');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'form-error';
      field.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = message;
    field.classList.add('has-error');
  }

  function clearFieldError(field) {
    const errorEl = field.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.remove();
    }
    field.classList.remove('has-error');
  }

  // Real-time email validation
  const emailField = document.querySelector('input[type="email"]');
  if (emailField) {
    emailField.addEventListener('blur', () => {
      if (emailField.value && !validateEmail(emailField.value)) {
        showFieldError(emailField, 'Please enter a valid email address');
      } else {
        clearFieldError(emailField);
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Smooth Scroll for Anchor Links
  // ═══════════════════════════════════════════════════════════════════════════

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // Current Year for Footer
  // ═══════════════════════════════════════════════════════════════════════════

  const yearSpan = document.querySelector('.current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

})();
