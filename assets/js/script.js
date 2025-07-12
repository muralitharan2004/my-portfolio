<!-- SCRIPTS -->
  <script>
    'use strict';

    // Sidebar toggle
    const sidebar = document.querySelector('[data-sidebar]');
    const sidebarBtn = document.querySelector('[data-sidebar-btn]');
    sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('active'));

    // Navigation
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const pages = document.querySelectorAll('[data-page]');

    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        link.classList.add('active');
        pages[index].classList.add('active');
        window.scrollTo(0, 0);
      });
    });

    // Portfolio filter
    const filterBtns = document.querySelectorAll('[data-filter]');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        projectItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || filter === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  </script>
