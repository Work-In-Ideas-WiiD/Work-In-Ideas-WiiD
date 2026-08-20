/**
 * Portfolio and Client Filter Handler
 */
export function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const projectCards = document.querySelectorAll('.project-card-item');
  const clientCards = document.querySelectorAll('.client-logo-item');

  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';

      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter projects if present
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.toLowerCase().includes(filter.toLowerCase())) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });

      // Filter clients if present
      clientCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.toLowerCase().includes(filter.toLowerCase())) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
