// Executive Portfolio Interactivity - Krishna Jammula

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // 2. Header Scroll Effect & Active Link Scrollspy
  const header = document.getElementById('site-header');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. Toast Notifications
  const toast = document.getElementById('toast');
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Copy Email to Clipboard Buttons
  const copyButtons = document.querySelectorAll('.js-copy-email');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'Krish9.j@gmail.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('✓ Email address copied to clipboard!');
        }).catch(() => {
          window.location.href = `mailto:${email}`;
        });
      } else {
        window.location.href = `mailto:${email}`;
      }
    });
  });

  // 4. Initiatives Filter System
  const filterButtons = document.querySelectorAll('.filter-btn');
  const initiativeCards = document.querySelectorAll('.initiative-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');

      initiativeCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Tech Stack Interactive Search Filter
  const techSearchInput = document.getElementById('tech-search');
  const techTags = document.querySelectorAll('.tech-pill');
  const techCategories = document.querySelectorAll('.tech-category-card');

  if (techSearchInput) {
    techSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      techCategories.forEach(categoryCard => {
        let hasMatch = false;
        const pills = categoryCard.querySelectorAll('.tech-pill');

        pills.forEach(pill => {
          const text = pill.textContent.toLowerCase();
          if (query === '' || text.includes(query)) {
            pill.classList.remove('dimmed');
            if (query !== '' && text.includes(query)) {
              pill.classList.add('highlighted');
            } else {
              pill.classList.remove('highlighted');
            }
            hasMatch = true;
          } else {
            pill.classList.add('dimmed');
            pill.classList.remove('highlighted');
          }
        });

        if (query !== '' && !hasMatch) {
          categoryCard.classList.add('category-dimmed');
        } else {
          categoryCard.classList.remove('category-dimmed');
        }
      });
    });
  }

  // 6. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 7. Scroll Reveal Animation using IntersectionObserver
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });
});
