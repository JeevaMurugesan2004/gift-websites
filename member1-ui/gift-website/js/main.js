/**
 * GIFTLY - CORE JAVASCRIPT
 * js/main.js
 * Handles: Preloader, Scroll Progress, Marquee Dismissal, Sticky Navbar,
 * Mobile Menu, Theme Toggle, Dynamic Rendering, 3D Card Tilt, Testimonial Slider,
 * Stats Counter, FAQ Accordion, Form Validations, and Toast Notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     0. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  const toastContainer = document.getElementById('toast-container') || createToastContainer();

  function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
    return container;
  }

  window.showToast = function (message, type = 'info', icon = null) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-circle-info';
    if (type === 'success') iconClass = 'fa-circle-check';
    if (type === 'warning') iconClass = 'fa-triangle-exclamation';
    if (type === 'error') iconClass = 'fa-circle-exclamation';
    if (icon) iconClass = icon;

    toast.innerHTML = `
      <div class="toast-icon"><i class="fa-solid ${iconClass}"></i></div>
      <div class="toast-message">${message}</div>
    `;

    toastContainer.appendChild(toast);

    // Trigger entrance animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 3.8s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 400);
    }, 3800);
  };

  /* ==========================================================================
     1. PRELOADER (% Counter & Fade Out)
     ========================================================================== */
  const preloader = document.getElementById('preloader');
  const preloaderCounter = document.getElementById('preloader-counter');

  if (preloader) {
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 12) + 8;
      if (progress > 100) progress = 100;
      if (preloaderCounter) preloaderCounter.textContent = `${progress}%`;

      if (progress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          preloader.classList.add('fade-out');
        }, 200);
      }
    }, 45);

    // Fallback safeguard if page load is fast
    window.addEventListener('load', () => {
      if (progress < 100) {
        progress = 100;
        if (preloaderCounter) preloaderCounter.textContent = '100%';
        clearInterval(progressInterval);
        setTimeout(() => {
          preloader.classList.add('fade-out');
        }, 200);
      }
    });
  }

  /* ==========================================================================
     2. SCROLL PROGRESS BAR
     ========================================================================== */
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    if (!progressBar) return;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const scrollPercent = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }
  }, { passive: true });

  /* ==========================================================================
     3. ANNOUNCEMENT MARQUEE CLOSE
     ========================================================================== */
  const announcementBar = document.getElementById('announcement-bar');
  const announcementClose = document.getElementById('announcement-close');

  if (announcementClose && announcementBar) {
    if (sessionStorage.getItem('giftly_marquee_dismissed') === 'true') {
      announcementBar.classList.add('hidden');
    }

    announcementClose.addEventListener('click', () => {
      announcementBar.classList.add('hidden');
      sessionStorage.setItem('giftly_marquee_dismissed', 'true');
    });
  }

  /* ==========================================================================
     4. NAVBAR (Sticky Shrink, Sliding Underline, Theme & Mobile Menu)
     ========================================================================== */
  const siteHeader = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const navIndicator = document.querySelector('.nav-indicator');
  const hamburger = document.getElementById('hamburger-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const themeToggle = document.getElementById('theme-toggle');

  // Sticky navbar shrink & shadow
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // Sliding underline indicator
  function updateNavIndicator(targetElement) {
    if (!navIndicator || !targetElement) return;
    const itemRect = targetElement.getBoundingClientRect();
    const navRect = targetElement.closest('.nav-links').getBoundingClientRect();

    navIndicator.style.width = `${itemRect.width}px`;
    navIndicator.style.left = `${itemRect.left - navRect.left}px`;
    navIndicator.style.opacity = '1';
  }

  navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => updateNavIndicator(link));
    if (link.classList.contains('active')) {
      setTimeout(() => updateNavIndicator(link), 150);
    }
  });

  const navLinksContainer = document.querySelector('.nav-links');
  if (navLinksContainer) {
    navLinksContainer.addEventListener('mouseleave', () => {
      const activeLink = document.querySelector('.nav-link.active');
      if (activeLink) {
        updateNavIndicator(activeLink);
      } else if (navIndicator) {
        navIndicator.style.opacity = '0';
      }
    });
  }

  // Mobile Drawer Toggle
  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Theme Toggle (Dark / Light)
  function initTheme() {
    const savedTheme = localStorage.getItem('giftly_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('giftly_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info', newTheme === 'dark' ? 'fa-moon' : 'fa-sun');
    });
  }
  initTheme();

  // Visual Placeholders: Login & Cart
  const loginPlaceholders = document.querySelectorAll('.btn-login-placeholder');
  loginPlaceholders.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Authentication is a visual placeholder in this static preview.', 'info', 'fa-user-lock');
    });
  });

  const cartPlaceholders = document.querySelectorAll('.cart-btn-placeholder');
  cartPlaceholders.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Your shopping bag is currently empty (0 gifts).', 'info', 'fa-bag-shopping');
    });
  });

  /* ==========================================================================
     5. DYNAMIC RENDERING: OCCASION FLIP CARDS
     ========================================================================== */
  const occasionsGrid = document.getElementById('occasions-grid');
  if (occasionsGrid && typeof categoriesData !== 'undefined') {
    const isHome = occasionsGrid.dataset.limit === '6';
    const listToRender = isHome ? categoriesData.slice(0, 6) : categoriesData;

    occasionsGrid.innerHTML = listToRender.map(cat => `
      <div class="flip-card" tabindex="0" role="region" aria-label="${cat.name}">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="flip-card-icon">
              <i class="fa-solid ${cat.icon}"></i>
            </div>
            <h3 class="flip-card-name">${cat.name}</h3>
            <span class="flip-card-front-count">${cat.count}</span>
          </div>
          <div class="flip-card-back">
            <span class="flip-card-back-count">${cat.count} Available</span>
            <h4 class="flip-card-back-title">${cat.name}</h4>
            <span class="flip-card-action">
              Explore Collection <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     6. DYNAMIC RENDERING: FEATURED GIFTS & 3D TILT EFFECT
     ========================================================================== */
  const featuredGiftsGrid = document.getElementById('featured-gifts-grid');

  window.createGiftCard = function (gift) {
    return `
      <article class="gift-card" data-tilt>
        <div class="gift-card-shine"></div>
        <div class="gift-card-media">
          <span class="gift-badge">${gift.discount}</span>
          <button class="gift-wishlist-btn" aria-label="Save to Wishlist" onclick="this.classList.toggle('active'); showToast('Added to your wishlist preview!', 'success', 'fa-heart');">
            <i class="fa-regular fa-heart"></i>
          </button>
          <img src="${gift.image}" alt="${gift.name}" class="gift-card-img" loading="lazy">
        </div>
        <div class="gift-card-body">
          <span class="gift-category-tag">${gift.category}</span>
          <h3 class="gift-card-title">${gift.name}</h3>
          <p class="gift-card-desc">${gift.desc}</p>
          <div class="gift-rating">
            <div class="gift-rating-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <span class="gift-review-count">(${gift.reviews} reviews)</span>
          </div>
          <div class="gift-card-footer">
            <div class="gift-price-box">
              <span class="gift-price-current">${gift.price}</span>
              <span class="gift-price-old">${gift.oldPrice}</span>
            </div>
            <button class="btn btn-primary btn-sm" onclick="showToast('${gift.name} details preview opened.', 'info', 'fa-eye')">
              <span>View Gift</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  };

  if (featuredGiftsGrid && typeof giftsData !== 'undefined') {
    featuredGiftsGrid.innerHTML = giftsData.map(createGiftCard).join('');
    initCard3DTilt();
  }

  // 3D Tilt Effect on mousemove with glossy shine
  function initCard3DTilt() {
    const tiltCards = document.querySelectorAll('[data-tilt]');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; // Disable tilt on touch screens for comfort

    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
        const rotateY = ((x - centerX) / centerX) * 9;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

        // Update shine position
        const mouseXPercent = (x / rect.width) * 100;
        const mouseYPercent = (y / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${mouseXPercent}%`);
        card.style.setProperty('--mouse-y', `${mouseYPercent}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  /* ==========================================================================
     7. HOW IT WORKS: CONNECTING LINE ON SCROLL
     ========================================================================== */
  const howSection = document.getElementById('how-it-works');
  const howLineProgress = document.getElementById('how-connecting-progress');

  if (howSection && howLineProgress) {
    window.addEventListener('scroll', () => {
      const rect = howSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const visiblePart = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight * 0.5)));
        howLineProgress.style.width = `${Math.min(100, visiblePart * 120)}%`;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     8. STATS COUNTER WITH INTERSECTION OBSERVER
     ========================================================================== */
  const statsSection = document.getElementById('stats-section');
  const statNumbers = document.querySelectorAll('.stat-number');

  if (statsSection && statNumbers.length > 0) {
    let counted = false;

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          statNumbers.forEach(stat => {
            const target = parseFloat(stat.dataset.target);
            const prefix = stat.dataset.prefix || '';
            const suffix = stat.dataset.suffix || '';
            const isFloat = target % 1 !== 0;
            const duration = 2000;
            const startTime = performance.now();

            function updateCount(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out quadratic
              const easeOut = 1 - (1 - progress) * (1 - progress);
              const currentVal = easeOut * target;

              stat.textContent = `${prefix}${isFloat ? currentVal.toFixed(1) : Math.floor(currentVal)}${suffix}`;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                stat.textContent = `${prefix}${isFloat ? target.toFixed(1) : target}${suffix}`;
              }
            }
            requestAnimationFrame(updateCount);
          });
        }
      });
    }, { threshold: 0.3 });

    countObserver.observe(statsSection);
  }

  /* ==========================================================================
     9. TESTIMONIALS SLIDER (VANILLA JAVASCRIPT - NO SWIPER)
     ========================================================================== */
  const testimonialsTrack = document.getElementById('testimonials-track');
  const testimonialPrev = document.getElementById('testimonial-prev');
  const testimonialNext = document.getElementById('testimonial-next');
  const testimonialDotsContainer = document.getElementById('testimonial-dots');

  if (testimonialsTrack && typeof testimonialsData !== 'undefined') {
    testimonialsTrack.innerHTML = testimonialsData.map(item => `
      <div class="testimonial-slide">
        <div class="testimonial-quote-icon">
          <i class="fa-solid fa-quote-left"></i>
        </div>
        <p class="testimonial-quote">"${item.quote}"</p>
        <div class="testimonial-rating">
          ${'<i class="fa-solid fa-star"></i>'.repeat(item.rating)}
        </div>
        <div class="testimonial-author-wrap">
          <img src="${item.avatar}" alt="${item.name}" class="testimonial-avatar" loading="lazy">
          <div class="testimonial-author-info">
            <h4 class="testimonial-author-name">${item.name}</h4>
            <span class="testimonial-author-role">${item.role}</span>
          </div>
        </div>
      </div>
    `).join('');

    let currentIndex = 0;
    const totalSlides = testimonialsData.length;
    let autoPlayInterval = null;

    // Build Dots
    if (testimonialDotsContainer) {
      testimonialDotsContainer.innerHTML = testimonialsData.map((_, i) => `
        <button class="slider-dot ${i === 0 ? 'active' : ''}" aria-label="Go to slide ${i + 1}" data-index="${i}"></button>
      `).join('');
    }

    const dots = testimonialDotsContainer ? testimonialDotsContainer.querySelectorAll('.slider-dot') : [];

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;

      testimonialsTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    if (testimonialPrev) {
      testimonialPrev.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoPlay();
      });
    }

    if (testimonialNext) {
      testimonialNext.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoPlay();
      });
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.index, 10));
        resetAutoPlay();
      });
    });

    function startAutoPlay() {
      autoPlayInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5000);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // Pause on hover
    const sliderContainer = document.querySelector('.testimonials-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoPlay);
      sliderContainer.addEventListener('mouseleave', startAutoPlay);
    }

    startAutoPlay();
  }

  /* ==========================================================================
     10. GIFT FINDER TEASER (UI ONLY - NO FILTERING)
     ========================================================================== */
  const finderBtn = document.getElementById('finder-submit-btn');
  if (finderBtn) {
    finderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Smart Gift Concierge is coming soon! Browse our curated collections.', 'info', 'fa-wand-magic-sparkles');
    });
  }

  /* ==========================================================================
     11. FAQ ACCORDION
     ========================================================================== */
  const faqAccordion = document.getElementById('faq-accordion');
  if (faqAccordion && typeof faqsData !== 'undefined') {
    faqAccordion.innerHTML = faqsData.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'active' : ''}">
        <button class="faq-question" aria-expanded="${index === 0}">
          <span>${faq.question}</span>
          <div class="faq-icon"><i class="fa-solid fa-chevron-down"></i></div>
        </button>
        <div class="faq-answer" style="${index === 0 ? 'max-height: 200px;' : ''}">
          <div class="faq-answer-inner">${faq.answer}</div>
        </div>
      </div>
    `).join('');

    const faqItems = faqAccordion.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all others (only one open at a time)
        faqItems.forEach(other => {
          other.classList.remove('active');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
      });
    });
  }

  /* ==========================================================================
     12. NEWSLETTER CTA VALIDATION
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const emailValue = emailInput ? emailInput.value.trim() : '';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailValue || !emailRegex.test(emailValue)) {
        showToast('Please enter a valid email address.', 'warning', 'fa-envelope-open-text');
        if (emailInput) emailInput.focus();
        return;
      }

      showToast('Thank you for subscribing! Your 15% VIP discount code is sent.', 'success', 'fa-gift');
      newsletterForm.reset();
    });
  }

  /* ==========================================================================
     13. CONTACT FORM VALIDATION (FRONTEND ONLY)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      let isValid = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validate Name
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Please enter your full name.');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Validate Email
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please provide a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, 'Please write a message of at least 10 characters.');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (!isValid) return;

      // Button Loading State
      if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
        }
        showToast('Your message has been received! Our concierge will reply shortly.', 'success', 'fa-paper-plane');
        contactForm.reset();
      }, 1200);
    });

    function showError(input, message) {
      input.classList.add('error');
      const errorElem = input.parentElement.querySelector('.form-error-msg');
      if (errorElem) {
        errorElem.textContent = message;
        errorElem.classList.add('visible');
      }
    }

    function clearError(input) {
      input.classList.remove('error');
      const errorElem = input.parentElement.querySelector('.form-error-msg');
      if (errorElem) {
        errorElem.classList.remove('visible');
      }
    }
  }

  /* ==========================================================================
     14. FLOATING BUTTONS (BACK TO TOP & CHAT BUBBLE)
     ========================================================================== */
  const backToTopBtn = document.getElementById('back-to-top');
  const chatBubbleBtn = document.getElementById('chat-bubble-btn');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (chatBubbleBtn) {
    chatBubbleBtn.addEventListener('click', () => {
      showToast('Need gift recommendations? Our concierge team is active!', 'info', 'fa-headset');
    });
  }
});
