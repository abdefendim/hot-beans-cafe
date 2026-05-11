// Highlight active nav link based on current page
(function () {
  const links = document.querySelectorAll('.navbar-links a');
  const current = window.location.pathname.replace(/\/$/, '') || '/';
  links.forEach(function (link) {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === current) link.classList.add('active');
  });
})();

// Scroll-triggered fade-in animations
(function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
})();

// Apply form — prevent submit and show success
(function () {
  const form = document.getElementById('apply-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const success = document.getElementById('form-success');
    if (success) {
      success.style.display = 'block';
      form.reset();
      setTimeout(function () { success.style.display = 'none'; }, 4000);
    }
  });
})();

// Careers search filter
(function () {
  const input = document.getElementById('careers-search');
  if (!input) return;
  input.addEventListener('input', function () {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.careers-card').forEach(function (card) {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
})();

// Home job search — just focuses and scrolls to careers hint
(function () {
  const input = document.getElementById('home-search');
  if (!input) return;
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && this.value.trim()) {
      window.location.href = 'careers.html';
    }
  });
  const btn = document.getElementById('home-search-btn');
  if (btn) btn.addEventListener('click', function () {
    if (input.value.trim()) window.location.href = 'careers.html';
  });
})();
